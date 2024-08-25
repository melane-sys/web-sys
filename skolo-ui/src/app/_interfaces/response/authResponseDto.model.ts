import { User } from "../user/User";

export interface AuthResponseDto {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
    is2StepVerificationRequired: boolean;
    provider: string;
    user: User;
}