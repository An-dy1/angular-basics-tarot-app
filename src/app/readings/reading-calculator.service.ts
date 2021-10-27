import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReadingCalculatorService {
  constructor() {}

  calculate() {
    return 2.99;
  }
}
