import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from './../../_interfaces/response/authResponseDto.model';
import { UserForAuthenticationDto } from './../../_interfaces/user/userForAuthenticationDto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExternalAuthDto } from 'src/app/_interfaces/externalAuth/externalAuthDto.model';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string|any;

  loginForm: FormGroup|any;
  errorMessage: string = '';
  showError: boolean|any;

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName)
  }

  loginUser = (loginFormValue:any) => {
    this.showError = false;
    const login = { ...loginFormValue };

    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password,
      clientURI: environment.clientUrl+'/authentication/forgotpassword'
    }

    this.authService.loginUser('api/accounts/login', userForAuth)
      .subscribe({
        next: (res: AuthResponseDto) => {
            localStorage.setItem("token", res.token);
            const refreshToken = res.refreshToken;
            localStorage.setItem("refreshToken", refreshToken);
            this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
            console.log("status: " +res.isAuthSuccessful);
            if(this.authService.isUserStudent()){
              this.router.navigate(['/student-portal']);
            }
            if(this.authService.isUserSchool()){
              this.router.navigate(['/school-portal']);
            }
          
          
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          this.showError = true;
        }
      })
  }

}
