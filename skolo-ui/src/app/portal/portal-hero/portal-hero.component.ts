import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { EnrollmentDto } from 'src/app/_interfaces/enrollment/EnrollmentDto';
import { User } from 'src/app/_interfaces/user/User';
import { ErrorModalComponent } from 'src/app/shared/modals/error-modal/error-modal.component';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SharedDataService } from 'src/app/shared/SharedData.service';

@Component({
  selector: 'app-portal-hero',
  templateUrl: './portal-hero.component.html',
  styleUrls: ['./portal-hero.component.css'],
})
export class PortalHeroComponent implements OnInit {

  subjects: string[] = [];
  enrollments: EnrollmentDto|any;
  selectedSubjects: Set<string> = new Set();
  isUserAuthenticated: boolean = false;
  user: User | null = null;
  public errorMessage: string = '';
  bsModalRef?: BsModalRef;


  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
    private authService: AuthenticationService,
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private modal: BsModalService,
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
      this.getEnrollment();
  }

  public getEnrollment = () => {
    const addressUri: string = `api/enrollments/userEnrollements`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.enrollments= res as EnrollmentDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }

  //here is the issue
  redirectToClass(){
    if(this.enrollments == null || this.enrollments.length === 0){
      const config: ModalOptions = {
        initialState: {
          modalHeaderText: 'No class!',
          modalBodyText: `You have not enrolled in any class... please enroll to a class...!`,
          okButtonText: 'OK'
        }
      };

      this.bsModalRef = this.modal.show(ErrorModalComponent, config);
      this.bsModalRef.content.redirectOnOk.subscribe((_: any)=> {
        this.router.navigate(["/student-portal"]);
      } );
    }else{
      this.router.navigate(["/student-portal/class"]);
    }
  }
}
