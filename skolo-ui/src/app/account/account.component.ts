import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from '../_interfaces/user/User';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/service/authentication.service';
import { ErrorHandlerService } from '../shared/service/error-handler.service';
import { RepositoryService } from '../shared/service/repository.service';
import { SharedDataService } from '../shared/SharedData.service';
import { StudentCategoryDto } from '../_interfaces/student/student';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  user: User | null = null;
  public errorMessage: string = '';
  bsModalRef?: BsModalRef;
  studentCategory: StudentCategoryDto | null = null;
  private refreshSubscription!: Subscription;
  
  public categories: Array<{ id: number, name: string }> = [
    { id: 1, name: 'Primary' },
    { id: 2, name: 'Secondary' },
    { id: 3, name: 'Senior' },
    { id: 4, name: 'Career' }
  ];
  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private authService: AuthenticationService,
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private modal: BsModalService,
    private dataService: DataService,
  ) {
    this.authService.authChanged.subscribe(isAuth => {
      this.isUserAuthenticated = isAuth;
    });
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });
    this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
      this.getStudentCategory();
    });
  }

  ngOnInit(): void {

    this.isUserAuthenticated = this.authService.isUserAuthenticated();
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });
    this.getStudentCategory();
  }

  private getStudentCategory(): void {
    const apiUrl: string = `api/categories/user/CategoryByUserId`;
    this.repoService.getData(apiUrl)
      .subscribe(
        (res) => {
          this.studentCategory = res as StudentCategoryDto;
        },
        (err: HttpErrorResponse) => {
          this.errorService.handleError(err);
        }
      );
  }
}
