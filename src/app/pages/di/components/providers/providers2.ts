import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { BetterCounterService } from '../../services/better-counter.service';
import { IS_BETTER_COUNTER } from './token';

@Component({
  selector: 'app-providers2',
  template: `<div class="flex flex-col gap-3">
    <h1>Providers 2</h1>
    <div class="flex items-center gap-3">
      <button (click)="counter.decrement()">-</button>
      <span>{{ counter.count }}</span>
      <button (click)="counter.increment()">+</button>
    </div>
  </div>`,
  providers: [
    {
      provide: IS_BETTER_COUNTER,
      useValue: true,
    },
    {
      provide: CounterService,
      useFactory: (isBetterCounter: boolean) => {
        if (isBetterCounter) {
          return new BetterCounterService();
        }

        return new CounterService();
      },
      deps: [IS_BETTER_COUNTER],
    },
  ],
})
export class Providers2 {
  readonly counter = inject(CounterService);
}
