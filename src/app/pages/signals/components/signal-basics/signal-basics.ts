import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-basics',
  templateUrl: './signal-basics.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalBasics {
  readonly count = signal(0);

  readonly doubledCount = computed(() => this.count() * 2);

  protected increment() {
    this.count.update((value) => value + 1);
  }

  protected decerement() {
    this.count.update((value) => value - 1);
  }

  protected reset() {
    this.count.set(0);
  }
}
