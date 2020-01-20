import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
        <div class="alert alert-success" role="alert">
          <ng-content></ng-content>
        </div>
    `,
  styles: []
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
