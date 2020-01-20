import { Component, ViewChild, ComponentFactoryResolver, ElementRef, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { ModalService } from './components/modal-dynamic/modal-service';
import { ModalBodyComponent } from './components/modal-dynamic/modal-body/modal-body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-na-pratica';

  @ViewChild(GetViewContainerDirective, {static: true})
  getViewContainer;

  @ViewChildren(ModalBodyComponent)
  modalBody: QueryList<ModalBodyComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService) {}

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.modalBody.first.contextExp.nome = 'Corpo modal';
    console.log(( <any> this.modalBody.first).element.nativeElement);
    //this.modalBody.contextExp.nome = 'Corpo Modal';
   // this.modalService.openTeste(this.modalBody);
  }
}
