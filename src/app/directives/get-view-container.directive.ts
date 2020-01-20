import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGetViewContainer]'
})
export class GetViewContainerDirective {

  constructor(private viewContainerRef: ViewContainerRef) { }

}
