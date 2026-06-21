import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Parent } from './viewChild/parent/parent';
import { ParentCard } from './contentChild/parent-card';

@Component({
  selector: 'app-referencing-elements',
  templateUrl: './referencing-elements.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Parent, ParentCard],
})
export class ReferencingElements {}
