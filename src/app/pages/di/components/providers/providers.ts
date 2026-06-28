import { Component, inject } from '@angular/core';
import { BetterCounterService } from '../../services/better-counter.service';
import { CounterService } from '../../services/counter.service';
import { API_URL } from './token';

@Component({
  selector: 'app-providers',
  template: `<div class="flex flex-col gap-3">
    <h1>Providers</h1>
    <div class="flex items-center gap-3">
      <button (click)="counter.decrement()">-</button>
      <span>{{ counter.count }}</span>
      <button (click)="counter.increment()">+</button>
    </div>
    {{ api }}
  </div>`,
  providers: [
    {
      provide: CounterService,
      useExisting: BetterCounterService,
    },
    {
      provide: API_URL,
      useValue: 'https://github.com',
    },
  ],
})
export class Providers {
  readonly counter = inject(CounterService);
  readonly api = inject<string>(API_URL);
}
