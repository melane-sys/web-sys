import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared/SharedData.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  classLevel: string = '';
  subjects: string[] = [];
  paymentPlan: string = 'monthly'; // default payment plan
  paymentMethod: string = '';
  totalCost: number = 0;
  subjectCosts: { [key: number]: number } = {
    1: 125,
    2: 225,
    3: 300,
    4: 350,
    5: 400
  };

  constructor(private router: Router, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    const registerData = this.sharedDataService.getRegisterData();
    if (registerData) {
      this.classLevel = registerData.classLevel;
      this.subjects = registerData.subjects;
      this.calculateCost();
    }
  }

  calculateCost(): void {
    const numberOfSubjects = this.subjects.length;
    let baseCost = this.subjectCosts[numberOfSubjects] || 400; // Default cost for more than 5 subjects
    if (this.paymentPlan === 'annually') {
      baseCost *= 12; // Monthly to yearly conversion
      baseCost *= 0.6; // 40% discount
    } else {
      baseCost *= 1; // Monthly cost
    }
    this.totalCost = baseCost;
  }

  removeSubject(subject: string): void {
    this.subjects = this.subjects.filter(s => s !== subject);
    this.calculateCost();
  }

  onSubmit(): void {
    if (this.paymentPlan && this.paymentMethod) {
      // Handle the payment process
      console.log('Payment Details:', {
        classLevel: this.classLevel,
        subjects: this.subjects,
        paymentPlan: this.paymentPlan,
        paymentMethod: this.paymentMethod,
        totalCost: this.totalCost
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/student-portal']);
  }
}
