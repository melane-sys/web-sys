import { RatingDto } from "../rating/RatingDto";
import { SubjectDto } from "../subject/SubjectDto";

export interface TeacherDto {
    id: string; // Use string for GUIDs in TypeScript
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    pictureUrl: string;
    rating: number;
    subjects: SubjectDto[];
    ratings?:RatingDto;
  }