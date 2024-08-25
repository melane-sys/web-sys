import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";

@Injectable({
    providedIn: 'root'
  })
  export class StudentGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.authService.isUserStudent())
        return true;   
      this.router.navigate(['/forbidden'], { queryParams: { returnUrl: state.url }});
      return false;
    }
}
