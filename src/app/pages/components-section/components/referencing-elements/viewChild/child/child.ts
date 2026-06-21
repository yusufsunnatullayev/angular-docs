import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<span>This is child component</span>`,
})
export class Child {
  logger() {
    console.log('This is child logger!');
  }
}
