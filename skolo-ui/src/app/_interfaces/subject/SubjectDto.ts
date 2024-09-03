export interface SubjectDto {
    id: string; // Use string for GUIDs in TypeScript
    subjectName: string;
    class: string;
    price: number
    teacherId: string;
    subjectId: string;
    teacherFirstName: string;
    teacherLastName: string;
    grades: GradeDto[] |any;
    enrollItemsCount:any;
  }
  export interface GradeDto {
    id: string; 
    gradeName: string;
    subjectId: string;
  }