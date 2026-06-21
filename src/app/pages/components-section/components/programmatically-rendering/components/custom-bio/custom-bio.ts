import {
  Component,
  computed,
  inject,
  input,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { AdminBio } from '../admin-bio/admin-bio';
import { StandardBio } from '../standard-bio/standard-bio';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-custom-bio',
  imports: [NgComponentOutlet],
  template: `<div class="flex flex-col gap-2">
    <h2>Profile for Yusuf</h2>
    <!-- *ngComponentOutlet="customComponent(); inputs: customInputs(); content: cardContent()" -->
    <ng-container
      [ngComponentOutlet]="customComponent()"
      [ngComponentOutletInputs]="customInputs()"
      [ngComponentOutletContent]="cardContent()"
      #outlet="ngComponentOutlet"
    />

    <button (click)="outlet.componentInstance?.logger()">Log</button>

    <ng-template #contentProjection>
      <span>This is custom content projection</span>
    </ng-template>
  </div>`,
})
export class CustomBio {
  private vcr = inject(ViewContainerRef);
  readonly isAdmin = input(false);
  readonly contentTemplate = viewChild<TemplateRef<unknown>>('contentProjection');

  customInputs = computed(() => ({
    role: this.isAdmin() ? 'admin' : 'user',
  }));

  customComponent = computed(() => (this.isAdmin() ? AdminBio : StandardBio));

  cardContent = computed(() => {
    const template = this.contentTemplate();
    if (!template) return [];
    return [this.vcr.createEmbeddedView(template).rootNodes];
  });
}
