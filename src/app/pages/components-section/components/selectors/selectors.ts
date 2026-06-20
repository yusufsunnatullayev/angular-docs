import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomButton } from './custom-button/custom-button';
import { CustomInput } from './custom-input/custom-input';
import { CustomHightlight } from './custom-highlight/custom-highlight';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomButton, CustomInput, CustomHightlight],
})
export class Selectors {}
