export interface EnrollmentDto {
    id: string;          
    userId: string;
    firstName: string;
    lastName: string;
    grade: string;
    enrolledDate: Date; 
    enrollItems: EnrollItemDto[];
}
export interface EnrollmentForCreationDto {
    userId?: string;
    grade: string; 
    subtotal: number; 
    enrollItems: EnrollItemCreateDto[]; 
  }
  
  export interface EnrollItemCreateDto {
    subjectName: string;
    class: string; 
    teacherId: string; 
    subjectId: string; 
    price: number; 
  }

  export interface EnrollItemDto {
    subjectName: string;
    class: string; 
    teacherId: string; 
    price: number; 
  }
  