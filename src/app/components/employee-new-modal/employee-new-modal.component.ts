import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';
import { InputDirective } from 'src/app/directives/input.directive';

declare const $;

@Component({
  selector: 'app-employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild('inputSalary', {static: true, read: InputDirective})
  inputName: InputDirective;

  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService) {
      super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.onShow.subscribe(() => {
      this.inputName.focus();
    })
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }
}
