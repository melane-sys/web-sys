import { Component, Input, OnInit } from '@angular/core';
import { PricingService } from '../shared/pricing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-price',
  templateUrl: './school-price.component.html',
  styleUrls: ['./school-price.component.css']
})
export class SchoolPriceComponent implements OnInit {
  @Input() sectionTitle: boolean = false;
  pricingDetails: { [key: number]: { monthly: number; yearly: number } } = {};
  selectedPlan: 'monthly' | 'yearly' = 'monthly';

  constructor(private pricingService: PricingService,private router: Router) { }

  ngOnInit() {
    this.pricingDetails = this.pricingService.getPricingDetails();
  }

  setPlan(plan: 'monthly' | 'yearly') {
    this.selectedPlan = plan;
  }

}
