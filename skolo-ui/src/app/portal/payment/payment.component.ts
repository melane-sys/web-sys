import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { IBasket, IBasketTotals } from 'src/app/_interfaces/Basket/Basket';
import { EnrollmentForCreationDto } from 'src/app/_interfaces/enrollment/EnrollmentDto';
import { User } from 'src/app/_interfaces/user/User';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';
import { BasketService } from 'src/app/shared/service/basket.service';
import { CheckoutService } from 'src/app/shared/service/checkout.service';
import { RepositoryErrorService } from 'src/app/shared/service/repository-error.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  gradeOptions: string[] = [];
  selectedGrade: string = '';
  user: User | null = null;
  basketTotals$!: Observable<IBasketTotals>;
  basket$!: Observable<IBasket>;
  errorMessage: string = '';
  ratingForm: FormGroup |any;
  bsModalRef?: BsModalRef;

  constructor(private router: Router, 
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private basketService: BasketService,
    private checkoutService: CheckoutService,
    private modal: BsModalService,
    private errorService: RepositoryErrorService,
  ) {
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    const classType: string = this.activeRoute.snapshot.params['grade'];
    this.setGradeOptions(classType);
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotals$;

  }


  setGradeOptions(classType: string) {
    switch (classType.toLowerCase()) {
      case 'primary':
        this.gradeOptions = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7'];
        break;
      case 'secondary':
        this.gradeOptions = ['Form 1', 'Form 2', 'Form 3'];
        break;
      case 'senior':
        this.gradeOptions = ['Form 4', 'Form 5'];
        break;
      default:
        this.gradeOptions = [];
        break;
    }
  }

  private getOrderToCreate(basket: IBasket){
    let id: string = this.activeRoute.snapshot.params['id'];

    let subtotal: number = 0;

    // Calculate subtotal
    basket.items.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const orderData: EnrollmentForCreationDto = {
      grade: this.selectedGrade,
      subtotal: subtotal,
      enrollItems: basket.items.map(item => {
        return {
          subjectName: item.subjectName,
          class: item.class,
          teacherId: item.teacherId,
          subjectId: item.subjectId,
          price: item.price
        };
      
      })
    };
    console.log('Order Data:', orderData);
    return orderData;
  }

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);

    this.checkoutService.createOrder(orderToCreate).subscribe(
      (response) => {
        const config: ModalOptions = {
          initialState: {
            modalHeaderText: 'Success Message',
            modalBodyText: `You have enrolled successfully`,
            okButtonText: 'OK'
          }
        };

        this.bsModalRef = this.modal.show(SuccessModalComponent, config);
        this.bsModalRef.content.redirectOnOk.subscribe((_: any)=> {
        this.goHome();
        } );

      },
      (err: HttpErrorResponse) => {
        this.errorService.handleError(err);
        this.errorMessage = this.errorService.errorMessage;
        
      }
    );
  }
  goBack(): void {
    this.router.navigate(['student-portal/student-enroll']);
  }
  goHome(): void {
    this.router.navigate(['student-portal/class']);
  }
}
