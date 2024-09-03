import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem, IBasketTotals } from 'src/app/_interfaces/Basket/Basket';
import { SubjectDto } from 'src/app/_interfaces/subject/SubjectDto';
import { BasketService } from 'src/app/shared/service/basket.service';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { RepositoryService } from 'src/app/shared/service/repository.service';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {
  basket$!: Observable<IBasket>;
  basketTotals$!: Observable<IBasketTotals>;
  @Input() isBasket = true;

  constructor( 
    private repository: RepositoryService,
    private errorService: ErrorHandlerService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private basketService: BasketService,
  ) {}

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotals$;
  }
  close() {
    this.router.navigate(["/student-portal"]);
  }


  onSubmit(): void {
    const message = `
    The payment functionality is currently under development. 
    Please contact the admin for offline assistance. 
    Email: info@melanegroup.com
  `;
  alert(message);
  }
  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  public redirectToPayment = async () => {
    this.basket$.subscribe(basket => {
      if (basket.items.length > 0) {
        // Extract unique class names from basket items
        const uniqueClasses = [...new Set(basket.items.map(item => item.class))];
        // Join the class names into a comma-separated string
        const classList = uniqueClasses.join(',');
        // Construct the URL with the class information
        var grade = encodeURIComponent(classList);
        const url = `student-portal/payment/${grade}`;
        this.router.navigate([url]);
      } else {
        alert('Your basket is empty. Please add items to the basket before proceeding to payment.');
      }
    });
  }
  
 
}
