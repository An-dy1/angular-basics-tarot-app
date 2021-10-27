import { TestBed } from '@angular/core/testing';

import { ReadingCalculatorService } from './reading-calculator.service';

describe('ReadingCalculatorService', () => {
  let service: ReadingCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
