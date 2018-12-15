import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  request: SelectItem[];

  constructor() {

  }
  ngOnInit() {

    this.request = [
      {label: 'Request Status*', value: null},
      {label: 'Request 1', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Request 2', value: {id: 2, name: 'Rome', code: 'RM'}}
  ];
  }

}
