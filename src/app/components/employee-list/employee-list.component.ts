import {Component, OnInit, ViewChild} from '@angular/core';
import employees from '../../employees';
import {EmployeeService, Employee} from '../../services/employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  showEmployeeMessage = false;
  employee: Employee;
  employeeEdit: Employee;
  employeeDelete: Employee;

  @ViewChild(EmployeeNewModalComponent, {static: false})
  employeeNewModalComponent: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent, {static: false})
  employeeEditModalComponent: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent, {static: false})
  employeeDeleteModalComponent: EmployeeDeleteModalComponent;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  getSalaryColor(employee) {
      return employee.salary > 20000 ? 'green' : null;
  }

  openNewModal() {
    this.employeeNewModalComponent.show();
  }

  openDestroyModal(employee: Employee) {
    this.employeeDelete = employee;
    this.employeeDeleteModalComponent.show();
  }

  openEditModal(employee: Employee) {
    this.employeeEdit = employee;
    this.employeeEditModalComponent.show();
  }

  onNewEmployee(employee: Employee) {
    this.showEmployeeMessage = true;
    this.employee = employee;
  }

  onEditEmployee(employee: Employee) {
    console.log(employee);
  }

  onDeleteEmployee(employee: Employee) {
    console.log(employee);
  }

  fechar(event: any) {
    console.log(event);
  }

  abrir(event: any) {
    console.log(event);
  }
}
