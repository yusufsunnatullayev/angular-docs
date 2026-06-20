import { Component } from '@angular/core';

@Component({
  selector: 'input[custom-input]',
  template: ``,
  host: {
    class: 'py-1 px-2 border border-gray-200 rounded-lg outline-blue-400 bg-gray-50',
  },
})
export class CustomInput {}
