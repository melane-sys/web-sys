import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CategoryForCreationDto } from 'src/app/_interfaces/student/student';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { DataService } from 'src/app/shared/service/data.service';
import { RepositoryErrorService } from 'src/app/shared/service/repository-error.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryForm: FormGroup | any;
  public errorMessage: string = '';
  bsModalRef?: BsModalRef;
  userId?: any

  public categories: Array<{ id: number, name: string }> = [
    { id: 1, name: 'Primary' },
    { id: 2, name: 'Secondary' },
    { id: 3, name: 'Senior' },
    { id: 4, name: 'Career' }
  ];

  constructor(
    private repository: RepositoryService,
    private errorHandler: RepositoryErrorService, 
    private router: Router,
    private modal: BsModalService,
    private authService: AuthenticationService,
    public bsModalRefClose: BsModalRef,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required]),
    });
  }

  validateControl = (controlName: string) => {
    return this.categoryForm.get(controlName).invalid && this.categoryForm.get(controlName).touched;
  }

  submitApplication = () => {
    if (this.categoryForm.valid) {
      this.executeApplicationSubmission(this.categoryForm.value);
    }
  }

  private executeApplicationSubmission = (formValue: any) => {
    const category: CategoryForCreationDto = {
      categoryName: formValue.categoryName,
    };

    const apiUrl = 'api/categories'; 
    this.repository.create(apiUrl, category)
      .subscribe({
        next: () => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Grade Submitted Successfully!',
              modalBodyText: `You have successfully selected your grade... You can always change it in your profile settings`,
              okButtonText: 'OK'
            }
          };
  
          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe((_: any)=> {
            this.bsModalRefClose.hide();
            this.router.navigate(["/student-portal"]);
            this.dataService.triggerRefreshTab1();
          } );
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      });
  }

  onClose() {
   /// this.router.navigate(["/student-portal"]);
    this.bsModalRefClose.hide();

  }
}
