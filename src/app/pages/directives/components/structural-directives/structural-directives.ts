import { ChangeDetectionStrategy, Component } from '@angular/core';
import { YTemplateOutletDirective } from './y-template-outlet/y-template-outlet.directive';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [YTemplateOutletDirective],
})
export class StructuralDirectives {}
