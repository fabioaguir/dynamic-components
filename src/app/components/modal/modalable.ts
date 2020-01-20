import { ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from './modal.component';

export class Modalable {
  @ViewChild(ModalComponent, {static: true})
  modalComponent: ModalComponent;

  @Output()
  onHide: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.modalComponent.onHide.subscribe( event => {
      this.onHide.emit(event);
    });

    this.modalComponent.onShow.subscribe( event => {
      this.onShow.emit(event);
    });
  }

  hide() {
    this.modalComponent.hide();
  }

  show() {
    this.modalComponent.show();
  }
}
