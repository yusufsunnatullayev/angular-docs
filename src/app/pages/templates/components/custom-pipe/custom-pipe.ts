import { Component } from '@angular/core';
import { TextTransformPipe } from './text-transform.pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [TextTransformPipe],
  template: `<div class="flex flex-col gap-3">
    <h1>Custom Pipe</h1>
    <div>
      <p>{{ text | textTransform: 'uppercase' }}</p>
    </div>
  </div>`,
})
export class CustomPipe {
  readonly text = 'Hi there, My name is Laptop';
}
