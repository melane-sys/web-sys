import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() dark: boolean = false;
  @Input() sticky: boolean = false;
  @Input() absolute: boolean = false;
  isUserAuthenticated: boolean = false;
  isUserSchool: boolean = false;
  isUserStudent: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
   }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {
   
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    });
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
    console.log("Initial Authenticated: " + this.isUserAuthenticated);

    this.isUserSchool = this.authService.isUserSchool();
    this.isUserStudent = this.authService.isUserStudent();
  }



  public logout = () => {
    this.authService.logout();

    this.router.navigate(["/"]);
  }
}
