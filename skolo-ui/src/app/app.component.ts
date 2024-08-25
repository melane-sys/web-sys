import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService) {}
    ngOnInit(): void {
      if(this.authService.isUserAuthenticated())
        this.authService.sendAuthStateChangeNotification(true);
    }
  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
