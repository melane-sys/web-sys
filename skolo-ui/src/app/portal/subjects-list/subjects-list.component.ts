import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { StudentCategoryDto } from 'src/app/_interfaces/student/student';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { TeacherDto } from 'src/app/_interfaces/teacher/TeacherDto';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SubjectDetailsComponent } from 'src/app/subject-details/subject-details.component';
import { CategoryComponent } from '../category/category.component';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {
  bsModalRef?: BsModalRef;
  subjects: SubjectDto |any;
  studentCategory: StudentCategoryDto | null = null;
  private refreshSubscription!: Subscription;
  constructor(
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService,
    private router: Router,
    private modalService: BsModalService,
    private dataService: DataService,
  ) {
    this.refreshSubscription = this.dataService.refreshTab1$.subscribe(() => {
      this.getStudentCategory();
    });
  }

  ngOnInit(): void {
    this.getStudentCategory();
  }

  private getStudentCategory(): void {
    const apiUrl: string = `api/categories/user/CategoryByUserId`;
    this.repoService.getData(apiUrl)
      .subscribe(
        (res) => {
          this.studentCategory = res as StudentCategoryDto;
          if (!this.studentCategory?.categoryName) {
            this.openSelectGrade();
          } else {
            this.getSubjects(this.studentCategory.categoryName);
          }
        },
        (err: HttpErrorResponse) => {
          this.openSelectGrade();
        }
      );
  }

  public getSubjects(grade: string): void {
    const addressUri: string = `api/subjects/classs/${grade}/class`;
    this.repoService.getData(addressUri)
      .subscribe(
        (res) => {
          this.subjects = res as SubjectDto[];
        },
        (error) => {
          this.errorService.handleError(error);
        }
      );
  }

  // public redirectToEnroll(id: string): void {
  //   const url: string = `student-portal/student-enroll/${id}`;
  //   this.router.navigate([url]);
  // }

  openSubjectDetailsModal(subjectId: string): void {
    const initialState: ModalOptions = {
      initialState: {
        subjectId: subjectId
      }
    };

    this.bsModalRef = this.modalService.show(SubjectDetailsComponent, initialState);
  }

  openSelectGrade(): void {
    this.bsModalRef = this.modalService.show(CategoryComponent);
  }
}
