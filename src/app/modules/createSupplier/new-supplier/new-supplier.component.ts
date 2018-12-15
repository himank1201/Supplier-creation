import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})



export class NewSupplierComponent implements OnInit {

  public isPopupVisible = false;
    state: SelectItem[];
    oraganization: SelectItem[];
    payment: SelectItem[];
  constructor(private sharedService: SharedService) {

  }

  showPopup() {
    this.isPopupVisible = true;
    this.sharedService.showOverlay(true);
  }

  hidePopup() {
    this.isPopupVisible = false;
    this.sharedService.showOverlay(false);
  }

  ngOnInit() {

    this.state = [
      {label: 'State *', value: null},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}}
  ];

    this.oraganization = [
      {label: 'Oraganization Type *', value: null},
      {label: 'Type 1', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Type 2', value: {id: 2, name: 'Rome', code: 'RM'}}
  ];

  this.payment = [
    {label: 'Payment Method*', value: null},
    {label: 'Credit/Debit Card', value: {id: 1, name: 'New York', code: 'NY'}},
    {label: 'Net Banking', value: {id: 2, name: 'Rome', code: 'RM'}}
  ];

  }

}
