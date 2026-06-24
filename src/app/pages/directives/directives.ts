import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AttrDirective } from './components/attr-directive/attr-directive';
import { StructuralDirectives } from './components/structural-directives/structural-directives';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AttrDirective, StructuralDirectives],
})
export class Directives {}
