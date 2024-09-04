import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // createOrder(enroll:EnrollmentForCreationDto): Observable<any> {
  //   return this.http.post(this.envUrl.urlAddress + '/api/payments', enroll);
  // }

  createOrder(enrollment: any): Observable<any> {
    return this.http.post<any>(this.envUrl.urlAddress+'/api/payments/create-and-request-to-pay', enrollment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


}
