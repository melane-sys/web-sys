import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordDto } from 'src/app/_interfaces/resetPassword/resetPasswordDto.model';
import { ChangePasswordDto } from 'src/app/_interfaces/user/User';
import { PasswordConfirmationValidatorService } from 'src/app/shared/custom-validators/password-confirmation-validator.service';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup|any;
  showSuccess: boolean|any;
  showError: boolean|any;
  errorMessage: string|any;

  private token: string|any;
  private email: string|any;

  constructor(private authService: AuthenticationService, private passConfValidator: PasswordConfirmationValidatorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      previous: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });

    this.changePasswordForm.get('confirm').setValidators([Validators.required,
    this.passConfValidator.validateConfirmPassword(this.changePasswordForm.get('password'))]);
  }

  public validateControl = (controlName: string) => {
    return this.changePasswordForm.get(controlName).invalid && this.changePasswordForm.get(controlName).touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.changePasswordForm.get(controlName).hasError(errorName)
  }

  public resetPassword = (resetPasswordFormValue:any) => {
    this.showError = this.showSuccess = false;
    const resetPass = { ...resetPasswordFormValue };

    const resetPassDto: ChangePasswordDto = {
      previousPassword: resetPass.previous,
      password: resetPass.password,
      confirmPassword: resetPass.confirm
    }

    this.authService.changePassword('api/accounts/User/ChangePassword', resetPassDto)
      .subscribe({
        next: (_) => this.showSuccess = true,
        error: (err: HttpErrorResponse) => {
          this.showError = true;
          this.errorMessage = err.message;
        }
      })
  }

}
