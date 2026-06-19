import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';

interface IShippingMethod {
  name: string;
  id: number;
}

@Component({
  selector: 'app-linked-signal',
  templateUrl: './linked-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedSignal {
  readonly shippingOptions = signal<IShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);

  // With signal - the problem is, it will not change if we change the shipping options
  // readonly selectedOption = signal(this.shippingOptions()[0]);

  // Case 1
  // readonly selectedOption = linkedSignal(() => this.shippingOptions()[0]);

  // Case 2 with checking previous value
  readonly selectedOption = linkedSignal<IShippingMethod[], IShippingMethod>({
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      return newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0];
    },
  });

  protected changeShipping(index: number): void {
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  protected changeShippingOptions(): void {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}
