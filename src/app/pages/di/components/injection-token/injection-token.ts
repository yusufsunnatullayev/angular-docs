import { Component, inject } from '@angular/core';
import { USER_DATA } from './user-data.token';

@Component({
  selector: 'app-injection-token',
  template: `
    <div class="flex flex-col gap-3">
      <h1>Injection token</h1>
      <div class="flex items-center gap-3">
        <span>User Name: {{ userData.name }}</span>
        <span>User Age: {{ userData.age }}</span>
      </div>
    </div>
  `,
})
export class InjectionToken {
  readonly userData = inject(USER_DATA);
}
