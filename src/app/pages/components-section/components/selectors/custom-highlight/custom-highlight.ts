import { Component } from '@angular/core';

@Component({
  selector: '[custom-highlight]',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'bg-yellow-500!',
  },
})
export class CustomHightlight {}
