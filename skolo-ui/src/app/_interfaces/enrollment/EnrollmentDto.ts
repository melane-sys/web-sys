export interface EnrollmentDto {
    id: string;          
    userId: string;
    firstName: string;
    lastName: string;
    subjectId: string; 
    teacherFirstName: string;
    teacherLastName: string; 
    subjectName: string;
    enrolledDate: Date; 
}
