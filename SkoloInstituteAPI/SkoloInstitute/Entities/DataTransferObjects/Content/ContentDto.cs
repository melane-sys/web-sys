namespace SkoloInstitute.Entities.DataTransferObjects.Grade
{
    public class ContentDto
    {
        public Guid Id { get; set; }
        public string ContentName { get; set; }
        public Guid SubjectId { get; set; }
    }
    public class ContentForCreationDto
    {
        public string ContentName { get; set; }
    }
    public class ContentForUpdateDto
    {
        public string ContentName { get; set; }
    }
}
