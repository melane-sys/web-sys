﻿using SkoloInstitute.Entities.Models.EnrollAggregate;

namespace SkoloInstitute.Entities.Models
{
    public class Enrollment
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public string Grade { get; set; }
        public User User { get; set; }
        public bool Paid { get; set; }
        public string PhoneNumber { get; set; }
        public string ReferenceId { get; set; }
        public string PaymentToken { get; set; }
        public DateTime EnrolledDate { get; set; } = DateTime.Now;
        public decimal Subtotal { get; set; }
        public ICollection<EnrollItem> EnrollItems { get; set; } = new List<EnrollItem>();
    }
}
