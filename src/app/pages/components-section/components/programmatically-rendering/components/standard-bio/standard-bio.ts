import { Component, input } from '@angular/core';

@Component({
  selector: 'app-standard-bio',
  template: `<div class="flex flex-col gap-3">
    <span>This is standard bio {{ role() }}</span> <ng-content></ng-content>
  </div>`,
})
export class StandardBio {
  readonly role = input<string | null>(null);

  logger() {
    console.log('Standard bio logger');
  }
}
