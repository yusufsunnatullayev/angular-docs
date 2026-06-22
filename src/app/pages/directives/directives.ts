import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AttrDirective } from './components/attr-directive/attr-directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AttrDirective],
})
export class Directives {}
