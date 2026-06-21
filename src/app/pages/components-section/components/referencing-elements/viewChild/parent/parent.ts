import { Component, effect, ElementRef, viewChild } from '@angular/core';
import { Child } from '../child/child';
import { CustomButton } from '../../../selectors/custom-button/custom-button';

@Component({
  selector: 'app-parent',
  template: `
    <input #inputRef type="text" placeholder="Search..." [defaultValue]="'Yusuf'" />
    <button custom-button>Hello devs</button>
    <app-child />
  `,
  imports: [Child, CustomButton],
})
export class Parent {
  readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');
  readonly buttonRef = viewChild(CustomButton);
  readonly childComponent = viewChild(Child);

  constructor() {
    effect(() => {
      console.log('Input:', this.inputRef());
      console.log('Button:', this.buttonRef());
      console.log('Child:', this.childComponent());
    });
  }

  ngOnInit() {
    this.inputRef()?.nativeElement.focus();
    this.childComponent()?.logger();
  }
}
