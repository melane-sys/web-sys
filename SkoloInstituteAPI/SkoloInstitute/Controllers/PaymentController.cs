using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

namespace SkoloInstitute.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private const string SubscriptionKey = "3fb87ab14b9d433f83d82e8a57b13004";
        private const string BaseUrl = "https://sandbox.momodeveloper.mtn.com/v1_0/";
        private const string TokenEndpoint = "https://sandbox.momodeveloper.mtn.com/collection/token/";
        private const string RequestToPayEndpoint = "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay";

        public PaymentController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        private HttpRequestMessage CreateRequest(HttpMethod method, string endpoint, string jsonBody = null, string referenceId = null, string apiKey = null, string token = null, string targetEnvironment = null)
        {
            var request = new HttpRequestMessage(method, endpoint);
            request.Headers.Add("Ocp-Apim-Subscription-Key", SubscriptionKey);

            if (referenceId != null)
            {
                request.Headers.Add("X-Reference-Id", referenceId);
            }

            if (apiKey != null)
            {
                var authHeader = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{referenceId}:{apiKey}"));
                request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", authHeader);
            }

            if (token != null)
            {
                request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            }

            if (targetEnvironment != null)
            {
                request.Headers.Add("X-Target-Environment", targetEnvironment);
            }

            if (jsonBody != null)
            {
                request.Content = new StringContent(jsonBody, Encoding.UTF8, "application/json");
            }

            return request;
        }

        private async Task<string> SendRequestAsync(HttpRequestMessage request)
        {
            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }

        private async Task<string> GenerateApiTokenAsync(string referenceId, string apiKey)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, TokenEndpoint);
            var authHeader = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{referenceId}:{apiKey}"));
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", authHeader);
            request.Headers.Add("Ocp-Apim-Subscription-Key", SubscriptionKey);

            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var responseContent = await response.Content.ReadAsStringAsync();

            var tokenResponse = JsonConvert.DeserializeObject<JObject>(responseContent);
            return tokenResponse["access_token"]?.ToString();
        }

        [HttpPost("create-and-request-to-pay")]
        public async Task<IActionResult> CreateAndRequestToPay([FromBody] RequestToPayRequest requestToPayRequest)
        {
            try
            {
                var referenceId = Guid.NewGuid().ToString();

                // Step 1: Create API User
                var createUserRequestBody = JsonConvert.SerializeObject(new
                {
                    providerCallbackHost = "https://webhook.site/8e545ff3-9b40-4fd0-8c62-cb772a2e05fe"
                });
                var createUserRequest = CreateRequest(HttpMethod.Post, BaseUrl + "apiuser", createUserRequestBody, referenceId);
                await SendRequestAsync(createUserRequest);

                // Step 2: Get API User
                var getUserRequest = CreateRequest(HttpMethod.Get, BaseUrl + $"apiuser/{referenceId}");
                var getUserResponse = await SendRequestAsync(getUserRequest);
                var userResponse = JsonConvert.DeserializeObject<JObject>(getUserResponse);

                var providerCallbackHost = userResponse["providerCallbackHost"]?.ToString();
                var targetEnvironment = userResponse["targetEnvironment"]?.ToString();

                if (string.IsNullOrEmpty(providerCallbackHost) || string.IsNullOrEmpty(targetEnvironment))
                {
                    return StatusCode(500, new { Message = "Failed to retrieve valid response from MTN MoMo" });
                }

                // Step 3: Get API Key
                var getApiKeyRequest = CreateRequest(HttpMethod.Post, BaseUrl + $"apiuser/{referenceId}/apikey");
                var getApiKeyResponse = await SendRequestAsync(getApiKeyRequest);
                var apiKeyObject = JsonConvert.DeserializeObject<JObject>(getApiKeyResponse);
                var apiKey = apiKeyObject["apiKey"]?.ToString();

                if (string.IsNullOrEmpty(apiKey))
                {
                    return StatusCode(500, new { Message = "Failed to retrieve API Key from MTN MoMo" });
                }

                // Step 4: Generate API Token
                var token = await GenerateApiTokenAsync(referenceId, apiKey);
                if (string.IsNullOrEmpty(token))
                {
                    return StatusCode(500, new { Message = "Failed to retrieve API Token from MTN MoMo" });
                }

                // Step 5: Request To Pay
                var requestToPayBody = JsonConvert.SerializeObject(new
                {
                    amount = requestToPayRequest.Amount,
                    currency = requestToPayRequest.Currency,
                    externalId = Guid.NewGuid().ToString(), // Auto-generate externalId
                    payer = new
                    {
                        partyIdType = "MSISDN",
                        partyId = requestToPayRequest.PayerPartyId
                    },
                    payerMessage = requestToPayRequest.PayerMessage,
                    payeeNote = requestToPayRequest.PayeeNote
                });

                var requestToPayRequestMessage = CreateRequest(HttpMethod.Post, RequestToPayEndpoint, requestToPayBody, referenceId, apiKey, token, targetEnvironment);
                var requestToPayResponse = await SendRequestAsync(requestToPayRequestMessage);

                // Return the result of RequestToPay
                return Ok(new
                {
                    ReferenceId = referenceId,
                    ProviderCallbackHost = providerCallbackHost,
                    TargetEnvironment = targetEnvironment,
                    ApiKey = apiKey,
                    Token = token,
                    RequestToPayResponse = JsonConvert.DeserializeObject<JObject>(requestToPayResponse) // Include the response from RequestToPay
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = ex.Message });
            }
        }
    }

    public class RequestToPayRequest
    {
        public string Amount { get; set; }
        public string Currency { get; set; }
        public string PayerPartyId { get; set; }
        public string PayerMessage { get; set; }
        public string PayeeNote { get; set; }
    }

}