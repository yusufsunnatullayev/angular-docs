import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BetterCounterService {
  count = 0;

  increment() {
    this.count += 10;
  }

  decrement() {
    this.count -= 10;
  }
}
