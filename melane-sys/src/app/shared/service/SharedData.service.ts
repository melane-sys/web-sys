import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private registerDataSubject = new BehaviorSubject<any>(null);
  registerData$ = this.registerDataSubject.asObservable();

  setRegisterData(data: any) {
    this.registerDataSubject.next(data);
  }

  getRegisterData() {
    return this.registerDataSubject.getValue();
  }

}
