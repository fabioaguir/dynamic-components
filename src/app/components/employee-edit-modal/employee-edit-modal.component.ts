import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

declare const $;

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
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
    return nativeElement.firstChild.firstChild as HTMLElement;
  }
}
