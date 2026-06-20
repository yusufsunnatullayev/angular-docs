import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomCard } from './components/custom-card/custom-card';
import { CardTitle } from './components/card-title/card-title';
import { CardBody } from './components/card-body/card-body';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomCard, CardTitle, CardBody],
})
export class ContentProjection {}
