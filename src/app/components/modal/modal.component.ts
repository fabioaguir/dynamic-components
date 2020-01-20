import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Output()
  onHide: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.querySelector('[modal-title]').classList.add('modal-title');
    nativeElement.querySelector('[modal-body]').classList.add('modal-body');
    nativeElement.querySelector('[modal-footer]').classList.add('modal-footer');

    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHide.emit(e);
    });

    $(this.divModal).on('shown.bs.modal', (e) => {
      this.onShow.emit(e);
    });
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
