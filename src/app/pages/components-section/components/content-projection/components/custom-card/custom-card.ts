import { Component } from '@angular/core';

@Component({
  selector: 'custom-card',
  template: `
    <div class="w-100 bg-gray-100 p-4 rounded-lg shadow flex flex-col gap-4">
      <ng-content select="card-title"></ng-content>
      <div class="w-full h-px bg-gray-200"></div>
      <ng-content select="card-body"></ng-content>
      <ng-content select="custom-content"></ng-content>
    </div>
  `,
})
export class CustomCard {}
