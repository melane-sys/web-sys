import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EnrollmentDto } from 'src/app/_interfaces/enrollment/EnrollmentDto';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit {

  primarySubjects: SubjectDto|any;
  secondarySubjects: SubjectDto|any;
  seniorSubjects: SubjectDto|any;
  enrollments: EnrollmentDto|any;


  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
  ) {}

  ngOnInit() {
    this.getPrimarySubjects();
    this.getSecondarySubjects();
    this.getSeniorSubjects();
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

  
  public getPrimarySubjects = () => {
    const addressUri: string = `api/subjects/Primary/class`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.primarySubjects= res as SubjectDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }
  public getSecondarySubjects = () => {
    const addressUri: string = `api/subjects/Secondary/class`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.secondarySubjects= res as SubjectDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }
  public getSeniorSubjects = () => {
    const addressUri: string = `api/subjects/Senior/class`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.seniorSubjects= res as SubjectDto[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }
  
  close() {
    this.router.navigate(["/student-portal"]);
  }

  getExpirationDetails(enrolledDate: Date): { status: string, daysLeft?: number } {
    const enrollmentDate = new Date(enrolledDate);
    const currentDate = new Date();
    const expirationDate = new Date(enrollmentDate);
    expirationDate.setDate(enrollmentDate.getDate() + 30);

    const diffTime = expirationDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return {
        status: 'Valid',
        daysLeft: diffDays
      };
    } else {
      return {
        status: 'Expired'
      };
    }
  }
  public redirectToEnroll = async (id: string) => {
    let url: string = `student-portal/student-enroll/${id}`;
    this.router.navigate([url]);
  }
}
