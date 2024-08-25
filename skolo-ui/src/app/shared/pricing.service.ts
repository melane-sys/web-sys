import { Injectable } from '@angular/core';

interface PricingDetails {
  monthly: number |any;
  yearly: number|any;
}
@Injectable({
  providedIn: 'root'
})
export class PricingService {

  // Base price per month
  private basePrice: number = 500;

  // Pricing per license
  private licensePricing: { [key: number]: number } = {
    100: 15,
    300: 10,
    500: 8,
    1000: 5
  };

  // Discount rate for yearly plans
  private yearlyDiscount: number = 0.40;

  constructor() { }

  // Calculate monthly cost
  calculateMonthlyCost(licenses: number): number {
    const licenseCost = this.licensePricing[licenses];
    if (licenseCost === undefined) {
      throw new Error('Invalid number of licenses');
    }
    return this.basePrice + (licenseCost * licenses);
  }

  // Calculate yearly cost
  calculateYearlyCost(licenses: number): number {
    const monthlyCost = this.calculateMonthlyCost(licenses);
    const yearlyCost = monthlyCost * 12;
    return yearlyCost * (1 - this.yearlyDiscount);
  }

  // Get pricing details for display
  getPricingDetails(): { [key: number]: PricingDetails } {
    const details: { [key: number]: PricingDetails } = {
      100: {
        monthly: this.calculateMonthlyCost(100),
        yearly: this.calculateYearlyCost(100)
      },
      300: {
        monthly: this.calculateMonthlyCost(300),
        yearly: this.calculateYearlyCost(300)
      },
      500: {
        monthly: this.calculateMonthlyCost(500),
        yearly: this.calculateYearlyCost(500)
      },
      1000: {
        monthly: this.calculateMonthlyCost(1000),
        yearly: this.calculateYearlyCost(1000)
      }
    };
    return details;
  }
}