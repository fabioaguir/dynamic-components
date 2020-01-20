import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal-body',
  template: '<ng-container *ngTemplateOutlet="container; context: contextExp"></ng-container>',
  styles: []
})
export class ModalBodyComponent implements OnInit {

  public contextExp = {
    nome: ''
  }

  @ViewChild('container', {static: true}) container: TemplateRef<any>;

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

}
