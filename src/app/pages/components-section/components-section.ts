import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Selectors } from './components/selectors/selectors';
import { ContentProjection } from './components/content-projection/content-projection';
import { HostElements } from './components/host-elements/host-elements';

@Component({
  selector: 'app-components-section',
  templateUrl: './components-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Selectors, ContentProjection, HostElements],
})
export class ComponentsSection {}
