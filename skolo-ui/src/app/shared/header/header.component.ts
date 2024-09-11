import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/_interfaces/Basket/Basket';
import { BasketService } from '../service/basket.service';

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
  basket$!: Observable<IBasket>;

  constructor(private authService: AuthenticationService, private router: Router,
    private basketService: BasketService,
  ) {
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
    this.basket$ = this.basketService.basket$;
    
  }


  public redirectToEnroll = async () => {
    let url: string = `student-portal/student-enroll`;
    this.router.navigate([url]);
  }
  public logout = () => {
    this.authService.logout();

    this.router.navigate(["/"]);
  }
}
