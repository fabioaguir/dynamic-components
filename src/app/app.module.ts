import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee-new-modal/employee-new-modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { EmployeeEditModalComponent } from './components/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee-delete-modal/employee-delete-modal.component';
import { TesteComponent } from './teste/teste.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputDirective } from './directives/input.directive';
import { GetViewContainerDirective } from './directives/get-view-container.directive';
import { ModalDynamicComponent } from './components/modal-dynamic/modal-dynamic/modal-dynamic.component';
import { ModalContentDirective } from './components/modal-dynamic/modal-content.directive';
import { ModalTitleComponent } from './components/modal-dynamic/modal-title/modal-title.component';
import { ModalBodyComponent } from './components/modal-dynamic/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal-dynamic/modal-footer/modal-footer.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeListComponent,
      EmployeeNewComponent,
      SalaryColorDirective,
      EmployeeNewModalComponent,
      AlertComponent,
      EmployeeEditModalComponent,
      EmployeeDeleteModalComponent,
      TesteComponent,
      ModalComponent,
      InputDirective,
      GetViewContainerDirective,
      ModalDynamicComponent,
      ModalContentDirective,
      ModalTitleComponent,
      ModalBodyComponent,
      ModalFooterComponent
   ],
   entryComponents: [
    ModalDynamicComponent,
    //ModalBodyComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
