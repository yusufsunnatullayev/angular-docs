import { Component, input } from '@angular/core';

@Component({
  selector: 'button[custom-button]',
  template: `<ng-content>
    {{ label() }}
  </ng-content>`,
  host: {
    class: 'bg-red-500! rounded-full! hover:bg-red-400!',
  },
})
export class CustomButton {
  readonly label = input<string | null>(null);
}
