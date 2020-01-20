import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) { }

  open(modalImplementedComponent) {
    const componentRef =  this.componentFactoryResolver
    .resolveComponentFactory(ModalDynamicComponent)
    .create(this.injector);

    //componentRef.instance.mount(modalImplementedComponent);

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    //console.log(domElement);

    document.body.appendChild(domElement);

    //componentRef.instance.show();
  }

  openTeste(modalImplementedComponent: any) {
    // const componentRef =  this.componentFactoryResolver
    // .resolveComponentFactory(modalImplementedComponent)
    // .create(this.injector);

    //componentRef.instance.mount(modalImplementedComponent);

   // const componentRef = modalImplementedComponent.create(this.injector);

   //this.appRef.attachView(modalImplementedComponent.hostView);
    console.log(modalImplementedComponent.element.nativeElement);

    // const domElement = (modalImplementedComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // console.log(domElement);

    //document.body.appendChild(domElement);

    //componentRef.instance.show();
  }
}
