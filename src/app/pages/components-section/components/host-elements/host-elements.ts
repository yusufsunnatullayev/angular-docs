import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Greeting } from './greeting/greeting';

@Component({
  selector: 'app-host-elements',
  templateUrl: './host-elements.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Greeting],
})
export class HostElements {}
