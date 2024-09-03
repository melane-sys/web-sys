import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user/User';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { SharedDataService } from 'src/app/shared/SharedData.service';

@Component({
  selector: 'app-portal-hero',
  templateUrl: './portal-hero.component.html',
  styleUrls: ['./portal-hero.component.css'],
})
export class PortalHeroComponent implements OnInit {

  subjects: string[] = [];
 
  selectedSubjects: Set<string> = new Set();
  isUserAuthenticated: boolean = false;
  user: User | null = null;

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private authService: AuthenticationService
  ) {
    this.authService.authChanged.subscribe(isAuth => {
      this.isUserAuthenticated = isAuth;
    });
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {

    this.isUserAuthenticated = this.authService.isUserAuthenticated();
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });

  }

}
