import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SubjectDetailsComponent } from 'src/app/subject-details/subject-details.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  bsModalRef?: BsModalRef;
  primarySubjects: SubjectDto|any;
  secondarySubjects: SubjectDto|any;
  seniorSubjects: SubjectDto|any;
  careerSubjects: SubjectDto|any;
  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getPrimarySubjects();
    this.getSecondarySubjects();
    this.getSeniorSubjects();
    this.getCareerCourses();
  }

  public getPrimarySubjects = () => {
    const addressUri: string = `api/subjects/classs/Primary/class`;
    this.repoService.getData(addressUri)
    .subscribe(res => {
      // Ensure `res` is an array and then slice the first 4 subjects
      this.primarySubjects = (res as SubjectDto[]).slice(0, 4);
    },
    (error) => {
      this.errorService.handleError(error);
    })
}

public getSecondarySubjects = () => {
  const addressUri: string = `api/subjects/classs/Secondary/class`;
  this.repoService.getData(addressUri)
  .subscribe(res => {
    // Ensure `res` is an array and then slice the first 4 subjects
    this.secondarySubjects = (res as SubjectDto[]).slice(0, 4);
  },
  (error) => {
    this.errorService.handleError(error);
  })
}

public getSeniorSubjects = () => {
  const addressUri: string = `api/subjects/classs/Senior/class`;
  this.repoService.getData(addressUri)
  .subscribe(res => {
    // Ensure `res` is an array and then slice the first 4 subjects
    this.seniorSubjects = (res as SubjectDto[]).slice(0, 4);
  },
  (error) => {
    this.errorService.handleError(error);
  })
}
public getCareerCourses = () => {
  const addressUri: string = `api/subjects/classs/Senior/class`;
  this.repoService.getData(addressUri)
  .subscribe(res => {
    // Ensure `res` is an array and then slice the first 4 subjects
    this.careerSubjects = (res as SubjectDto[]).slice(0, 3);
  },
  (error) => {
    this.errorService.handleError(error);
  })
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
