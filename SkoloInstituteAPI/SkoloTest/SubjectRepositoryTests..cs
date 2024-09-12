using Moq;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloTest;

public class SubjectRepositoryTests
{
    [Fact]
    public void
    GetAllSubjectsAsync_ReturnsListOfCompanies_WithASingleSubject()
    {
        // Arrange
        var mockRepo = new Mock<ISubjectRepository>();
        mockRepo.Setup(repo => (repo.GetAllData()))
        .Returns((GetSubject()));
        // Actdotne
        var result = mockRepo.Object.GetAllData()
.ToList();
        // Assert
        Assert.IsType<List<Subject>>(result);
        Assert.Single(result);
    }

    public IEnumerable<Subject> GetSubject()
    {
        return new List<Subject>
{
new Subject
{
Id = Guid.NewGuid(),
SubjectName = "Maths",
Class = "Primary",
Price = 125
}
};
    }

}