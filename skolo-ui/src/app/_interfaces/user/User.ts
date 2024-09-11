export interface User {
    firstName: string;
    lastName: string;
}

export interface ChangePasswordDto {
    previousPassword: string;
    password: string;
    confirmPassword: string;
  }
