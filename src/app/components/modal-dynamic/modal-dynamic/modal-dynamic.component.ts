import { Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ModalContentDirective } from '../modal-content.directive';

declare const $;

@Component({
  selector: 'app-modal-dynamic',
  template: `
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <ng-template modalContent></ng-template>
      </div>
    </div>
  </div>
`,
  styles: []
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective, {static: true}) modalContent: ModalContentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef) { }

  ngOnInit() {
  }

  mount(modalImplementedComponent: any) {
    const compentFactory =  this.componentFactoryResolver
    .resolveComponentFactory(modalImplementedComponent);

    this.modalContent.viewContainerRef
    .createComponent(compentFactory);
  }

  hide() {
    $(this.divModal).modal('hide');
  }

  show() {
    $(this.divModal).modal('show');
  }

  private get divModal() {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
