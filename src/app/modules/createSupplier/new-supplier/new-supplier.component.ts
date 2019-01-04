import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { SharedService } from '../../../services/shared.service';
import Utils from '../../utils';
import { SupplierVO } from 'src/app/model/SupplierVO';
import { AuthService } from 'src/app/services/auth.service';
import { UserVO } from 'src/app/model/UserVO';
import { SupplierService } from 'src/app/services/supplier.service';
import { CountyTaxJrVO } from 'src/app/model/CountyTaxJrVO';
import { CostCenterDetail } from 'src/app/model/CostCenterDetail';
import { AddressVO } from 'src/app/model/AddressVO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})



export class NewSupplierComponent implements OnInit {

  public isPopupVisible = false;
  stateDropDown: SelectItem[];
  oraganizationTypesDropDown: SelectItem[];
  paymentDropDown: SelectItem[];
  actTypesDropDown: SelectItem[];
  purOrgsDropDown: SelectItem[];
  minorityTypesDropDown: SelectItem[];
  taxHoldCodesDropDown: SelectItem[];
  rsnTypesDropDown: SelectItem[];
  cntrAreaDropDown: SelectItem[];
  supplierVO: SupplierVO;
  userData: UserVO;
  accountTypeRequired: string;
  costCenter: string;
  contrArea: string;
  ccDetails: CostCenterDetail;
  isValidate = true;


  constructor(private sharedService: SharedService, private authService: AuthService,
    private messageService: MessageService, private supplierService: SupplierService, private router: Router) {

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

    this.stateDropDown = Utils.getStateDropDownValues();
    this.oraganizationTypesDropDown = Utils.getOrgTypes();
    this.paymentDropDown = Utils.getPaymentTypes();
    this.actTypesDropDown = Utils.getActTypes();
    this.purOrgsDropDown = Utils.getPurchasingOrganisation();
    this.minorityTypesDropDown = Utils.getMinorityTypes();
    this.taxHoldCodesDropDown = Utils.getTaxHoldCodes();
    this.rsnTypesDropDown = Utils.getRsnTypes();
    this.cntrAreaDropDown = Utils.getContrAreas();

    this.userData = this.authService.getUserData();
    this.supplierVO = new SupplierVO();
    this.supplierVO.initiator = this.userData.userName;
    this.supplierVO.taxIdType = 'TIN/EIN';
    this.supplierVO.acceptedPayTerms = true;
    this.accountTypeRequired = '*';
  }

  checkTermStatus() {
    if (this.supplierVO.acceptedPayTerms) {
      // TODO removeAlterTerms();
    } else {
      // TODO addAlterTerms();
    }
  }

  checkPayType() {
    if (this.supplierVO.paymentMethod === 'V- Vendor EFT Outbound') {
      this.accountTypeRequired = '*';
    } else {
      this.accountTypeRequired = '';
    }
  }

  phoneFormat() {
    let phoneArray: string[];
    let index = 0;
    this.supplierVO.phone = this.supplierVO.phone.replace(/\D/g, '');
    if (this.supplierVO.phone.length === 10) {
      phoneArray = this.supplierVO.phone.split('');
      this.supplierVO.phone = '';
      phoneArray.forEach(digit => {
        if (index === 0) {
          this.supplierVO.phone += '(' + digit;
        } else if (index === 3) {
          this.supplierVO.phone += ') ' + digit;
        } else if (index === 5) {
          this.supplierVO.phone += digit + '-';
        } else {
          this.supplierVO.phone += digit;
        }
        index++;
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please enter a 10-digit phone number.'});
    }
  }

  faxFormat() {
    let phoneArray: string[];
    let index = 0;
    this.supplierVO.fax = this.supplierVO.fax.replace(/\D/g, '');
    if (this.supplierVO.fax.length === 10) {
      phoneArray = this.supplierVO.fax.split('');
      this.supplierVO.fax = '';
      phoneArray.forEach(digit => {
        if (index === 0) {
          this.supplierVO.fax += '(' + digit;
        } else if (index === 3) {
          this.supplierVO.fax += ') ' + digit;
        } else if (index === 5) {
          this.supplierVO.fax += digit + '-';
        } else {
          this.supplierVO.fax += digit;
        }
        index++;
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please enter a 10-digit fax number.'});
    }
  }

  formatTaxId() {
    let taxIDArray: string[];
    let index = 0;
    this.supplierVO.taxId = this.supplierVO.taxId.replace(/\-/g, '');
    if (this.supplierVO.taxId.length >= 9) {
      taxIDArray = this.supplierVO.taxId.split('');
      this.supplierVO.taxId = '';
      taxIDArray.forEach(character => {
        if (this.supplierVO.taxIdType === 'SSN') {
          if (index === 2 || index === 4) {
            this.supplierVO.taxId += character + '-';
          } else {
            this.supplierVO.taxId += character;
          }
          index++;
        } else {
          if (index === 1) {
            this.supplierVO.taxId += character + '-';
          } else {
            this.supplierVO.taxId += character;
          }
          index++;
        }
      });
    }
  }

  checkManager() {
    this.sharedService.showOverlay(true);
    if (this.costCenter.length > 1) {
      this.supplierService.getCCMgrDetails(this.costCenter, this.contrArea).subscribe(data => {
        this.ccDetails = data;
        this.supplierVO.manager = this.ccDetails.name;
        this.supplierVO.managerEmail = this.ccDetails.email;
        this.supplierVO.managerId = this.ccDetails.uname;
        this.sharedService.showOverlay(false);
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please check cost center number !'});
      this.sharedService.showOverlay(false);
    }
  }

  checkBank() {
    this.sharedService.showOverlay(true);
    if (this.supplierVO.routingNo.length >= 9) {
        if (this.supplierVO.county.length >= 0) {
          let countyTaxJrVO: CountyTaxJrVO;
          countyTaxJrVO = new CountyTaxJrVO();
          countyTaxJrVO.county = this.supplierVO.county;
          countyTaxJrVO.taxJrCode = this.supplierVO.taxJrCode;

          const countyTaxJrVOList = Array<CountyTaxJrVO>();
          countyTaxJrVOList.push(countyTaxJrVO);
          this.supplierVO.counties = countyTaxJrVOList;
        }
        this.supplierVO.validation = 'bank';
        this.supplierService.validateSupplier(this.supplierVO).subscribe(data => {
          this.supplierVO = data;
          this.sharedService.showOverlay(false);
        });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please check routing number !'});
      this.sharedService.showOverlay(false);
      return ;
    }
  }

  checkTaxJr() {
    this.sharedService.showOverlay(true);
    this.supplierVO.city = this.supplierVO.city.toUpperCase();
    this.supplierVO.validation = 'address';
    if (this.supplierVO.zipCode.length >= 5) {
      if (this.supplierVO.state !== '0' &&  this.supplierVO.city.length > 3) {
        this.supplierService.validateSupplier(this.supplierVO).subscribe(data => {
          this.supplierVO = data;
          this.sharedService.showOverlay(false);
        });
      } else {
        this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please verify supplier city,state and zip !'});
        this.sharedService.showOverlay(false);
        return ;
      }
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please verify supplier city,state and zip !'});
      this.sharedService.showOverlay(false);
      return ;
    }
  }

  processForm() {
    this.sharedService.showOverlay(true);
    this.validateSupplier();
    if (this.isValidate) {
      this.addAddress();
      this.supplierVO.supplierMode = 'create';
      this.supplierService.createSupplier(this.supplierVO).subscribe(data => {
        this.supplierVO = data;
        this.sharedService.showOverlay(false);
        this.messageService.add({severity: 'info', summary: 'Info Message',
          detail: 'Supplier Created with Supplier Number -- ' + this.supplierVO.supplierNumber});
        this.router.navigate(['statuslist']);
      });
    } else {
      this.sharedService.showOverlay(false);
      this.messageService.add({severity: 'error', summary: 'Error Message',
               detail: 'Please fill all the fields that are marked with *'});
    }
  }

  addAddress() {
    const addressVOList = Array<AddressVO>();
    let addressVO: AddressVO;
    addressVO = new CountyTaxJrVO();

    addressVO.stAddress = this.supplierVO.stAddress;
    addressVO.stAddress1 = this.supplierVO.stAddress1;
    addressVO.state = this.supplierVO.state;
    addressVO.city = this.supplierVO.city;
    addressVO.zipCode = this.supplierVO.zipCode;
    addressVO.county = this.supplierVO.county;
    addressVO.taxJrCode = this.supplierVO.taxJrCode;
    addressVO.addressType = 'RemitTo ';
    addressVOList.push(addressVO);

    this.supplierVO.addresses = addressVOList;
  }

  validateSupplier() {
    this.isValidate = true;
    const supplier = this.supplierVO;
    if (this.checkForEmptyString(supplier.supplierName) || this.checkForEmptyString(supplier.contactName)
        || this.checkForEmptyString(supplier.email) || this.checkForEmptyString(supplier.phone) || this.checkForEmptyString(supplier.fax)) {
      this.isValidate = false;
      return;
    }

    if (this.checkForEmptyString(supplier.stAddress) || this.checkForEmptyString(supplier.city) ||
          this.checkForEmptyString(supplier.state) || this.checkForEmptyString(supplier.zipCode) ||
          this.checkForEmptyString(supplier.county) || this.checkForEmptyString(supplier.taxJrCode)) {
      this.isValidate = false;
      return;
    }

    if (!supplier.acceptedPayTerms) {
      if (this.checkForEmptyString(supplier.alterPayTerms)) {
        this.isValidate = false;
        return;
      }
    }

    if (this.checkForEmptyString(supplier.taxIdType) || this.checkForEmptyString(supplier.taxId) ||
          this.checkForEmptyString(supplier.organisationType) || this.checkForEmptyString(supplier.paymentMethod) ||
          this.checkForEmptyString(supplier.purchaseOrg) || this.checkForEmptyString(supplier.minorityStatus) ||
           this.checkForEmptyString(supplier.withHoldCode) || this.checkForEmptyString(supplier.estCostCenterAmount)) {
      this.isValidate = false;
      return;
    }

    if (supplier.paymentMethod === 'V- Vendor EFT Outbound') {
      if (this.checkForEmptyString(supplier.accountNo) || this.checkForEmptyString(supplier.routingNo) ||
            this.checkForEmptyString(supplier.bankName) || this.checkForEmptyString(supplier.accountType)) {
        this.isValidate = false;
        return;
      }
    }

    if (this.checkForEmptyString(supplier.supCreateReason) || this.checkForEmptyString(supplier.initiator) ||
          this.checkForEmptyString(this.costCenter) || this.checkForEmptyString(supplier.manager)) {
      this.isValidate = false;
      return;
    }
  }

  checkForEmptyString(field: String) {
    if (field === null || field === undefined  || field.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
