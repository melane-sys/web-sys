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
 
}
