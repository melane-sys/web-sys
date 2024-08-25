export interface RatingDto {
    firstName: string;
    lastName: string;
    reviewBody: string;
    createdDate: Date;
    starsCount: number;
}

export interface RatingForCreationDto {
  userId?: string;
  reviewBody: string;
  starsCount: number;
  teacherId: string; 
}
