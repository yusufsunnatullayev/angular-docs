import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-attr-directive',
  template: `<div class="flex flex-col gap-3">
    <h1>Attribute Directive</h1>
    <span highlight color="yellow" class="w-fit">Hello World!</span>
  </div>`,
  imports: [HighlightDirective],
})
export class AttrDirective {}
