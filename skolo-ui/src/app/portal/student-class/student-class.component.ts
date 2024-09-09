import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { EnrollmentDto } from 'src/app/_interfaces/enrollment/EnrollmentDto';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SubjectDetailsComponent } from 'src/app/subject-details/subject-details.component';

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
  gradeClass:any;
  grade:any;
  bsModalRef?: BsModalRef;

  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
   // this.getPrimarySubjects();
    this.getSecondarySubjects();
    this.getSeniorSubjects();
    this.getEnrollment();
  }
  public getEnrollment = () => {
    const addressUri: string = `api/enrollments/userEnrollements`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      this.enrollments= res as EnrollmentDto[];

      this.enrollments.forEach((enrollment: { grade: string; }) => {
        console.log("Class: " + enrollment.grade); 
        if(enrollment.grade == "Grade 1" || enrollment.grade == "Grade 2"|| enrollment.grade == "Grade 3"||enrollment.grade == "Grade 4"
          || enrollment.grade == "Grade 5"||enrollment.grade == "Grade 6"||enrollment.grade == "Grade 7"
        ){
          this.grade = "Primary";
          this.getPrimarySubjects(this.grade);
        }
        if(enrollment.grade == "Form 1"||enrollment.grade == "Form 2"|| enrollment.grade == "Form 3"){
          this.grade = "Secondary";
          this.getPrimarySubjects(this.grade);
        }
        if(enrollment.grade == "Form 4"||enrollment.grade == "Form 5"){
          this.grade = "Senior";
          this.getPrimarySubjects(this.grade);
        }
      });

    },
    (error) => {
      this.errorService.handleError(error);
    })
  }


  
  public getPrimarySubjects = (grade:string) => {
    const addressUri: string = `api/subjects/${grade}/class`;
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

  openSubjectDetailsModal(subjectId: string) {
    const initialState: ModalOptions = {
      initialState: {
        subjectId: subjectId
      }
    };

    this.bsModalRef = this.modalService.show(SubjectDetailsComponent, initialState);
  }
}
