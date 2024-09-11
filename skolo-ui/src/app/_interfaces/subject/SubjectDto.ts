export interface SubjectDto {
    id: string; // Use string for GUIDs in TypeScript
    subjectName: string;
    class: string;
    price: number
    teacherId: string;
    subjectId: string;
    teacherFirstName: string;
    teacherLastName: string;
    contents: ContentDto[] |any;
    enrollItemsCount:any;
    teacherRating: number
  }
  export interface ContentDto {
    id: string; 
    contentName: string;
    subjectId: string;
  }