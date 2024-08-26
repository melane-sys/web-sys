import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TeacherAppForCreationDto } from 'src/app/_interfaces/teacher/TeacherAppForCreationDto';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';

@Component({
  selector: 'app-hero-educator',
  templateUrl: './hero-educator.component.html',
  styleUrls: ['./hero-educator.component.css']
})
export class HeroEducatorComponent implements OnInit {

  public teacherForm: FormGroup | any;
  public errorMessage: string = '';
  bsModalRef?: BsModalRef;

  constructor(
    private repository: RepositoryService,
    private errorHandler: ErrorHandlerService, 
    private router: Router,
    private modal: BsModalService,
  ) { }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      experience: new FormControl('', [Validators.required]),
      subjects: new FormControl('', [Validators.required])
    });
  }

  validateControl = (controlName: string) => {
    return this.teacherForm.get(controlName).invalid && this.teacherForm.get(controlName).touched;
  }

  submitApplication = () => {
    if (this.teacherForm.valid) {
      this.executeApplicationSubmission(this.teacherForm.value);
    }
  }

  private executeApplicationSubmission = (formValue: any) => {
    const teacherApplication: TeacherAppForCreationDto = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      phone: formValue.phone,
      email: formValue.email,
      experience: formValue.experience,
      subjects: formValue.subjects
    };

    const apiUrl = 'api/teacher-applications'; 
    this.repository.create(apiUrl, teacherApplication)
      .subscribe({
        next: () => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Application Submitted Successfully!',
              modalBodyText: `You have successfully sent your application. The Human Resource team will review your application. If you do not receive a response within 3 weeks, please consider your application unsuccessful.`,
              modalFooterText: 'Candidates with experience in online teaching are given preference. Thank you for your interest.!',
              okButtonText: 'OK'
            }
          };
  
          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe((_: any)=> {
            this.teacherForm.reset();
          } );
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
        }
      });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
