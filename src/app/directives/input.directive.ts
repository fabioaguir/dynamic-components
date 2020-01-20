import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input'
})
export class InputDirective {

  constructor(private elementRef: ElementRef) { }

  focus() {
    this.elementRef.nativeElement.focus();
  }
}
