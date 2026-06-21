import { Component, input } from '@angular/core';

@Component({
  selector: 'app-admin-bio',
  template: `<div class="flex flex-col gap-3">
    <span>This is admin bio {{ role() }}</span>
    <ng-content></ng-content>
  </div>`,
})
export class AdminBio {
  readonly role = input<string | null>(null);

  logger() {
    console.log('Admin bio logger');
  }
}
