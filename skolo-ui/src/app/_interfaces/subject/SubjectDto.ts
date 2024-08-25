export interface SubjectDto {
    id: string; // Use string for GUIDs in TypeScript
    subjectName: string;
    class: string;
    teacherId: string;
    teacherFirstName: string;
    teacherLastName: string;
  }