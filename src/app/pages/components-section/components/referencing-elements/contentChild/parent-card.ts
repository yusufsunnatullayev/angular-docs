import { Component, contentChild, effect, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-card',
  template: `<div class="w-100 p-3 rounded-xl bg-gray-200 shadow flex flex-col gap-4">
    <span>This is header</span>
    <ng-content></ng-content>
  </div>`,
})
export class ParentCard {
  readonly content = contentChild<ElementRef<HTMLParagraphElement>>('contentBody');

  constructor() {
    effect(() => {
      console.log('Content:', this.content());
    });
  }
}
