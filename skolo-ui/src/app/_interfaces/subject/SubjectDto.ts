export interface SubjectDto {
    id: string; // Use string for GUIDs in TypeScript
    subjectName: string;
    class: string;
    price: number
    teacherId: string;
    teacherFirstName: string;
    teacherLastName: string;
  }