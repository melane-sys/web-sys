import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { RatingForCreationDto } from 'src/app/_interfaces/rating/RatingDto';
import { TeacherDto } from 'src/app/_interfaces/teacher/TeacherDto';
import { User } from 'src/app/_interfaces/user/User';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  @Input() dark: boolean = false;
  teacher: TeacherDto|any;
  user: User | null = null;
  errorMessage: string = '';
  ratingForm: FormGroup |any;
  bsModalRef?: BsModalRef;
  @Input() light: boolean = false;
  
  constructor(
   private repository: RepositoryService,
   private router: Router, 
   private activeRoute: ActivatedRoute, 
   private errorService: ErrorHandlerService, 
   private authService: AuthenticationService,
   private modal: BsModalService,
  ) {}

  lightbox: any;
  ngOnInit() {
    this.getTeacherDetails();
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });

    this.ratingForm = new FormGroup({
      reviewBody: new FormControl('', [Validators.maxLength(1000),]),
      starsCount: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    const control = this.ratingForm.controls[controlName];
    return control.hasError(errorName) && (control.dirty || control.touched);
  };

  public createRating = (dataFormValue: any) => {

    if (this.ratingForm.valid) {
      this.executeRatingCreation(dataFormValue);

    }
  };
  private executeRatingCreation = (dataFormValue: any) => {
    let id: string = this.activeRoute.snapshot.params['id'];

    let product: RatingForCreationDto = {
 
      reviewBody: dataFormValue.reviewBody,
      starsCount: dataFormValue.starsCount,
      teacherId: id,
    };


    console.log(product);

    let apiUrl: string = 'api/ratings';

    this.repository.create(apiUrl, product)
    .subscribe({
      next: (own: any) => {
        const config: ModalOptions = {
          initialState: {
            modalHeaderText: 'Success Message',
            modalBodyText: `You have rated the teacher successfully`,
            okButtonText: 'OK'
          }
        };

        this.bsModalRef = this.modal.show(SuccessModalComponent, config);
        this.bsModalRef.content.redirectOnOk.subscribe((_: any)=> {
          this.ratingForm.reset();
          this.getTeacherDetails();
        } );
      },
      error: (err: HttpErrorResponse) => {
          this.errorService.handleError(err);
        
      }
    })
  }


  private getTeacherDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/teachers/${id}`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.teacher = res as TeacherDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorService.handleError(err);
    })
  }

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-nav-control .swiper-button-next',
      prevEl: '.swiper-nav-control .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  close() {
    this.router.navigate(["/student-portal"]);
  }

}
