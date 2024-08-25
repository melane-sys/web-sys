import { Router } from '@angular/router';
import { PasswordConfirmationValidatorService } from './../../shared/custom-validators/password-confirmation-validator.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup |any;
  errorMessage: string = '';
  showError: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private passConfValidator: PasswordConfirmationValidatorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl(''),
      userType: new FormControl('student', [Validators.required])
    });

    this.registerForm.get('confirm').setValidators([
      Validators.required,
      this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))
    ]);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName).hasError(errorName);
  }

  public registerUser = (registerFormValue: any) => {
    this.showError = false;
    const formValues = { ...registerFormValue };
    const userType = formValues.userType;
    const registrationUrl = userType === 'student' ? 'api/accounts/registration' : 'api/accounts/registration/school';

    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm,
      clientURI: environment.clientUrl + '/authentication/emailconfirmation'
    };

    this.authService.registerUser(registrationUrl, user)
      .subscribe({
        next: (_) => this.router.navigate(["/authentication/login"]),
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          this.showError = true;
        }
      });
  }
}
