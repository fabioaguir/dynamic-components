import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

declare const $;

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService,
              private element: ElementRef) { }

  ngOnInit() {
  }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal() {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
