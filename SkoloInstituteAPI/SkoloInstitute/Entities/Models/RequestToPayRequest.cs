namespace SkoloInstitute.Entities.Models
{
    public class RequestToPayRequest
    {
        public string Amount { get; set; }
        public string Currency { get; set; }
        public string PayerPartyId { get; set; }
        public string PayerMessage { get; set; }
        public string PayeeNote { get; set; }
    }
}
