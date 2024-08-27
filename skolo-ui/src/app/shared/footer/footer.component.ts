import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SubscriberForCreationDto } from 'src/app/_interfaces/Subscriber/SubscriberForCreationDto';
import { SuccessModalComponent } from '../modals/success-modal/success-modal.component';
import { RepositoryService } from '../service/repository.service';
import { RepositoryErrorService } from '../service/repository-error.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() dark: boolean = false;
  public newsletterForm: FormGroup |any;
  public errorMessage: string = '';
  bsModalRef?: BsModalRef;

  constructor(
    private repository: RepositoryService,
    private errorHandler: RepositoryErrorService, 
    private router: Router,
    private modal: BsModalService
  ) {}

  ngOnInit(): void {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  validateControl = (controlName: string) => {
    const control = this.newsletterForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  hasError = (controlName: string, errorName: string) => {
    const control = this.newsletterForm.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

  subscribeNewsletter = () => {
    if (this.newsletterForm.valid) {
      this.executeSubscription(this.newsletterForm.value);
    }
  }

  private executeSubscription = (formValue: any) => {
    const subscriber: SubscriberForCreationDto = {
      email: formValue.email
    };

    const apiUrl = 'api/subscribers'; // Replace with your actual API endpoint
    this.repository.create(apiUrl, subscriber)
      .subscribe({
        next: () => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Subscription Successful!',
              modalBodyText: `Thank you for subscribing to our newsletter. You'll receive updates on our latest news and offers.`,
              modalFooterText: 'We appreciate your interest!',
              okButtonText: 'OK'
            }
          };

          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe(() => {
            this.newsletterForm.reset();
          });
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      });
  }
}
