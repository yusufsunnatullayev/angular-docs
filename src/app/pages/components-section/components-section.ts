import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Selectors } from './components/selectors/selectors';
import { ContentProjection } from './components/content-projection/content-projection';
import { HostElements } from './components/host-elements/host-elements';
import { ReferencingElements } from './components/referencing-elements/referencing-elements';
import { ProgrammaticallyRendering } from './components/programmatically-rendering/programmatically-rendering';

@Component({
  selector: 'app-components-section',
  templateUrl: './components-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Selectors,
    ContentProjection,
    HostElements,
    ReferencingElements,
    ProgrammaticallyRendering,
  ],
})
export class ComponentsSection {}
