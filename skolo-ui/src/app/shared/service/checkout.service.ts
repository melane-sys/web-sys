import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EnvironmentUrlService } from './environment-url.service';
import { EnrollmentForCreationDto } from 'src/app/_interfaces/enrollment/EnrollmentDto';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  
  private enrollData: EnrollmentForCreationDto | null = null;
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) {}

  createOrder(enroll:EnrollmentForCreationDto): Observable<any> {
    return this.http.post(this.envUrl.urlAddress + '/api/enrollments', enroll);
  }

  setOrderData(data: EnrollmentForCreationDto) {
    this.enrollData = data;
  }

  getOrderData(): EnrollmentForCreationDto | null {
    return this.enrollData;
  }


}
