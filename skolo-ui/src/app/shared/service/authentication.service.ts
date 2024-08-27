import { AuthResponseDto } from './../../_interfaces/response/authResponseDto.model';
import { Injectable } from '@angular/core';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model'; 
import { RegistrationResponseDto } from './../../_interfaces/response/registrationResponseDto.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { UserForAuthenticationDto } from 'src/app/_interfaces/user/userForAuthenticationDto.model';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ForgotPasswordDto } from 'src/app/_interfaces/resetPassword/forgotPasswordDto.model';
import { ResetPasswordDto } from 'src/app/_interfaces/resetPassword/resetPasswordDto.model';
import { CustomEncoder } from '../custom-encoder';
import { TwoFactorDto } from 'src/app/_interfaces/twoFactor/twoFactorDto.model';
import { User } from 'src/app/_interfaces/user/User';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();
  private userSubject = new BehaviorSubject<User | null>(null);
  public userChanged = this.userSubject.asObservable(); 

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService, 
    private jwtHelper: JwtHelperService) { 
      this.updateAuthState();
    }

 

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public loginUser(route: string, body: UserForAuthenticationDto) {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, this.envUrl.urlAddress), body)
      .pipe(
        tap((res: AuthResponseDto) => {
          if (res.isAuthSuccessful) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user)); // Store user info in localStorage
            this.userSubject.next(res.user); // Update user information
            this.authChangeSub.next(true);
          } else {
            this.authChangeSub.next(false);
          }
        })
      );
  }

  public forgotPassword = (route: string, body: ForgotPasswordDto) => {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public resetPassword = (route: string, body: ResetPasswordDto) => {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public confirmEmail = (route: string, token: string, email: string) => {
    let params = new HttpParams({ encoder: new CustomEncoder() })
    params = params.append('token', token);
    params = params.append('email', email);
    
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress), { params: params });
  }

  public twoStepLogin = (route: string, body: TwoFactorDto) => {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove user info from localStorage
    this.userSubject.next(null); // Clear user info
    this.sendAuthStateChangeNotification(false);
  }


  private updateAuthState() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const isAuthenticated = !!token; // Check if token exists
    this.authChangeSub.next(isAuthenticated);
    if (isAuthenticated) {
      this.userSubject.next(user ? JSON.parse(user) : null); // Restore user info from localStorage
    }
  }
  public isUserAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return !!token; // Return true if token exists, otherwise false
  }

  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return false; 
    }
  
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    
    return role === 'Administrator';
  }
  
  public isUserStudent = (): boolean => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return false; 
    }
  
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    
    return role === 'Student';
  }
  public isUserSchool = (): boolean => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return false; 
    }
  
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    
    return role === 'School';
  }


  public loadCurrentUserId() {
    const token: any = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    return name;
  }
  

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
