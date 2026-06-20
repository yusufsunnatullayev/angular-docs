import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: ` <div class="bg-red-500 w-full">
    <p>Good morning, how are you!</p>
  </div>`,
  host: {
    class: 'w-full',
    '(click)': 'logger()',
    '(mouseenter)': 'logger()',
  },
})
export class Greeting {
  readonly disabled = true;

  protected logger() {
    console.log('Clicked');
  }
}
