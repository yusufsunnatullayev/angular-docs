import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomPipe } from './components/custom-pipe/custom-pipe';
import { TemplateOutlet } from './components/template-outlet/template-outlet';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomPipe, TemplateOutlet],
})
export class Templates {}
