import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseover)': 'onMouseOver()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {
  private el = inject(ElementRef);
  readonly color = input('');

  protected onMouseOver() {
    this.highlight(this.color());
  }

  protected onMouseLeave() {
    this.highlight('');
  }

  protected highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
