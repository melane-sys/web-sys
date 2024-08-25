import { Directive, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class SchoolGuard implements CanActivate{

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isUserSchool())
      return true;   
    this.router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
