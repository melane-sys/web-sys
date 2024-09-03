import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SubjectDto } from '../_interfaces/subject/SubjectDto';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherDto } from '../_interfaces/teacher/TeacherDto';
import { RepositoryErrorService } from '../shared/service/repository-error.service';
import { RepositoryService } from '../shared/service/repository.service';
import { BasketService } from '../shared/service/basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem, IBasketTotals } from '../_interfaces/Basket/Basket';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subject: SubjectDto|any;
  subjectId: string = '';
  basket$!: Observable<IBasket>;
  basketTotals$!: Observable<IBasketTotals>;
  @Input() isBasket = true;

  constructor(public bsModalRef: BsModalRef,
    private repository: RepositoryService,
    private router: Router, 
    private errorService: RepositoryErrorService,
    private basketService: BasketService,
  ) {}

  ngOnInit(): void {
    this.getDetails();
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotals$;
    
  }


  isProductInBasket(basket: IBasket, subjectName: string): boolean {

    if (basket && basket.items){
      return basket.items.some(sub => sub.subjectName === subjectName);
    }
    return false;
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.subject);
  }
  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  onClose() {
    this.bsModalRef.hide();
  }
  private getDetails = () =>{
    let id: string = this.subjectId;
    let apiUrl: string = `api/subjects/${id}`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.subject = res as SubjectDto;
    },
    (err: HttpErrorResponse) =>{
      this.errorService.handleError(err);
    })
  }
  public redirectToEnroll = async () => {
    let url: string = `student-portal/student-enroll`;
    this.router.navigate([url]);
    this.bsModalRef.hide();
  }
  
}
