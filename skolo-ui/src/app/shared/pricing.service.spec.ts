/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PricingService } from './pricing.service';

describe('Service: Pricing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricingService]
    });
  });

  it('should ...', inject([PricingService], (service: PricingService) => {
    expect(service).toBeTruthy();
  }));
});
