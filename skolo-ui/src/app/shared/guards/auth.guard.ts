import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { of, switchMap, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isUserAuthenticated() ? 
      of(true) : 
      this.handleTokenRefresh(state.url);
  }

  private handleTokenRefresh(returnUrl: string) {
    return this.authService.refreshToken().pipe(
      switchMap(() => of(true)),
      catchError(() => {
        this.router.navigate(['/authentication/login'], { queryParams: { returnUrl }});
        return of(false);
      })
    );
  }
}
