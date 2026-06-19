import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBasics } from './components/signal-basics/signal-basics';
import { LinkedSignal } from './components/linked-signal/linked-signal';
import { ResourceSignal } from './components/resource-signal/resource-signal';

@Component({
  selector: 'app-signals',
  imports: [SignalBasics, LinkedSignal, ResourceSignal],
  templateUrl: './signals.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {}
