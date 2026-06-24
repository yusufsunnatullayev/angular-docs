import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[yTemplateOutlet]',
})
export class YTemplateOutletDirective implements OnInit {
  private vcr = inject(ViewContainerRef);
  readonly yTemplateOutlet = input.required<TemplateRef<unknown>>();
  readonly yTemplateOutletContext = input<Record<string, unknown>>();

  ngOnInit(): void {
    this.vcr.createEmbeddedView(this.yTemplateOutlet(), this.yTemplateOutletContext());
  }
}
