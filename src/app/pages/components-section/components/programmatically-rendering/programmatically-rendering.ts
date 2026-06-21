import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CustomBio } from './components/custom-bio/custom-bio';

@Component({
  selector: 'app-programmatically-rendering',
  templateUrl: './programmatically-rendering.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomBio],
})
export class ProgrammaticallyRendering {
  readonly isAdmin = signal(false);

  protected changeBio() {
    this.isAdmin.set(!this.isAdmin());
  }
}
