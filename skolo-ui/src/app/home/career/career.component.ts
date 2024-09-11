import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SubjectDetailsComponent } from 'src/app/subject-details/subject-details.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {


  bsModalRef?: BsModalRef;
  careerSubjects: SubjectDto|any;
  constructor( 
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getCareerCourses();
  }

public getCareerCourses = () => {
  const addressUri: string = `api/subjects/classs/Senior/class`;
  this.repoService.getData(addressUri)
  .subscribe(res => {
    // Ensure `res` is an array and then slice the first 4 subjects
    this.careerSubjects = res as SubjectDto[];
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
