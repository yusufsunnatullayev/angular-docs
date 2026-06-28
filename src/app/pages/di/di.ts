import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InjectionToken } from './components/injection-token/injection-token';
import { Providers } from './components/providers/providers';
import { Providers2 } from './components/providers/providers2';

@Component({
  selector: 'app-di',
  templateUrl: './di.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InjectionToken, Providers, Providers2],
})
export class Di {}
