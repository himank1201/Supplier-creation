import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/model/Config';
import { AuthService } from 'src/app/services/auth.service';
import { SelectItem, MessageService } from 'primeng/api';
import { AdminUsers } from 'src/app/model/AdminUsers';
import { SupplierService } from 'src/app/services/supplier.service';
import { SharedService } from 'src/app/services/shared.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  configData: Config;
  adminUsersDropDownValues: SelectItem[];
  adminUsers: Array<AdminUsers>;
  companyDropDownValues: SelectItem[];
  selectedCompany: any;
  purProxy = false;
  actsProxy = false;
  isValidate = true;
  yearRange: string = (new Date().getFullYear()) + ':' + (new Date().getFullYear() + 10);
  purProxyCalStartDate: Date;
  purProxCalEndDate: Date;
  acctsProxyCalStartDate: Date;
  acctsProxyCalEndDate: Date;
  minPurProxyStartDate: Date;
  minPurProxyEndDate: Date;
  minAcctsProxyStartDate: Date;
  minAcctsProxyEndDate: Date;
  purProxyRequired = '';
  actsProxyRequired = '';


  constructor(private authService: AuthService, private supplierService: SupplierService, private messageService: MessageService,
     private sharedService: SharedService) { }

  ngOnInit() {
    this.configData = this.authService.getConfigData();
    this.filterData(this.configData);
    console.log(this.configData.configUserVO.purProxy);
    this.adminUsers = this.configData.adminUsers;
    this.adminUsersDropDownValues = [];
    this.adminUsersDropDownValues.push({label: 'Admin Users', value: null});
    this.adminUsers.forEach(adminUser => {
      this.adminUsersDropDownValues.push({label: adminUser.adminUserId, value: adminUser.adminUserId});
    });
    this.minPurProxyStartDate = new Date();
    this.purProxyCalStartDate = new Date();
    this.purProxCalEndDate = new Date(this.configData.configUserVO.purProxyEnd);
    this.minPurProxyEndDate = new Date(this.configData.configUserVO.purProxyStart);

    this.minAcctsProxyStartDate = new Date();
    this.acctsProxyCalStartDate = new Date();
    this.acctsProxyCalEndDate = new Date(this.configData.configUserVO.acctsProxyEnd);
    this.minAcctsProxyEndDate = new Date(this.configData.configUserVO.acctsProxyStart);

    this.companyDropDownValues = [{ label: 'US01', value: 'US01' }, { label: '1330', value: '1330' }];
    this.selectedCompany = 'US01';
  }

  saveConfig() {
    this.sharedService.showOverlay(true);
    this.validateFields();
    if (!this.isValidate) {
      this.sharedService.showOverlay(false);
      return;
    }
    this.preProcessConfigData();
    this.supplierService.saveAppConfig(this.configData).subscribe(data => {
      this.configData = data;
      this.filterData(this.configData);
      this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'Config Details Saved Successfully !'});
      this.sharedService.showOverlay(false);
      this.loadAppConfigInSession();
    });
  }

  changeCompany() {
    this.getAppConfig();
  }

  getAppConfig() {
    this.sharedService.showOverlay(true);
    this.supplierService.getAppConfig(this.selectedCompany).subscribe(data => {
      this.configData = data;
      this.filterData(this.configData);
      this.sharedService.showOverlay(false);
      this.loadAppConfigInSession();
    });
  }

  loadAppConfigInSession() {
    this.supplierService.getAppConfig('US01').subscribe(data => {
       this.authService.setConfigData(data);
    });
  }

  acctsCheckBoxChange() {
    if (this.actsProxy) {
      this.actsProxyRequired = '*';
    } else {
      this.actsProxyRequired = '';
    }
  }

  purCheckBoxChange() {
    if (this.purProxy) {
      this.purProxyRequired = '*';
    } else {
      this.purProxyRequired = '';
    }
  }

  filterData(data: Config) {
    if (data.configUserVO.purProxy === 'true') {
      this.purProxy = true;
      this.purProxyRequired = '*';
    } else {
      this.purProxy = false;
      this.purProxyRequired = '';
    }

    if (data.configUserVO.acctsProxy === 'true') {
      this.actsProxy = true;
      this.actsProxyRequired = '*';
    } else {
      this.actsProxy = false;
      this.actsProxyRequired = '';
    }

  }

  changePurProxyStartDate() {
    const day = this.purProxyCalStartDate.getDate();
    const month = this.purProxyCalStartDate.getMonth() + 1; // add 1 because months are indexed from 0
    const year = this.purProxyCalStartDate.getFullYear();

    let dayOfMonth;
    if (day < 10) {
      dayOfMonth = '0' + day;
    } else {
      dayOfMonth = day;
    }

    let monthOfYear;
    if (month < 10) {
      monthOfYear = '0' + month;
    } else {
      monthOfYear = month;
    }

    this.configData.configUserVO.purProxyStart = monthOfYear + '/' + dayOfMonth + '/' + year;
    this.minPurProxyEndDate = new Date(this.configData.configUserVO.purProxyStart);
  }

  changePurProxyEndtDate() {
    const day = this.purProxCalEndDate.getDate();
    const month = this.purProxCalEndDate.getMonth() + 1; // add 1 because months are indexed from 0
    const year = this.purProxCalEndDate.getFullYear();

    let dayOfMonth;
    if (day < 10) {
      dayOfMonth = '0' + day;
    } else {
      dayOfMonth = day;
    }

    let monthOfYear;
    if (month < 10) {
      monthOfYear = '0' + month;
    } else {
      monthOfYear = month;
    }

    this.configData.configUserVO.purProxyEnd = monthOfYear + '/' + dayOfMonth + '/' + year;
  }

  changeAcctsProxyStartDate() {
    const day = this.acctsProxyCalStartDate.getDate();
    const month = this.acctsProxyCalStartDate.getMonth() + 1;
    const year = this.acctsProxyCalStartDate.getFullYear();

    let dayOfMonth;
    if (day < 10) {
      dayOfMonth = '0' + day;
    } else {
      dayOfMonth = day;
    }

    let monthOfYear;
    if (month < 10) {
      monthOfYear = '0' + month;
    } else {
      monthOfYear = month;
    }

    this.configData.configUserVO.acctsProxyStart = monthOfYear + '/' + dayOfMonth + '/' + year;
    this.minAcctsProxyEndDate = new Date(this.configData.configUserVO.acctsProxyStart);
  }

  changeAcctsProxyEndDate() {
    const day = this.acctsProxyCalEndDate.getDate();
    const month = this.acctsProxyCalEndDate.getMonth() + 1;
    const year = this.acctsProxyCalEndDate.getFullYear();

    let dayOfMonth;
    if (day < 10) {
      dayOfMonth = '0' + day;
    } else {
      dayOfMonth = day;
    }

    let monthOfYear;
    if (month < 10) {
      monthOfYear = '0' + month;
    } else {
      monthOfYear = month;
    }

    this.configData.configUserVO.acctsProxyEnd = monthOfYear + '/' + dayOfMonth + '/' + year;
  }

  preProcessConfigData() {
    if (this.purProxy) {
      this.configData.configUserVO.purProxy = 'true';
    } else {
      this.configData.configUserVO.purProxy = 'false';
    }

    if (this.actsProxy) {
      this.configData.configUserVO.acctsProxy = 'true';
    } else {
      this.configData.configUserVO.acctsProxy = 'false';
    }

    this.configData.configUserVO.company = this.selectedCompany;
  }

  validateFields() {
    this.isValidate = true;
    if (this.configData.appConfig.appMode.length === 0 || this.configData.appConfig.applicationTitle.length === 0 ||
         this.configData.appConfig.fromEmail.length === 0 || this.configData.appConfig.managerEmail.length === 0 ||
         this.configData.appConfig.approvalUrl.length === 0 || this.configData.appConfig.appUrl.length === 0 ) {
            this.isValidate = false;
            this.messageService.add({severity: 'error', summary: 'Error Message',
               detail: 'Please fill all the fields that are marked with *'});
            return;
    }

    if (this.configData.appConfig.antiBribLimit.length === 0 || !Number(this.configData.appConfig.antiBribLimit)) {
      this.isValidate = false;
      this.messageService.add({severity: 'error', summary: 'Error Message',
                detail: 'Anti Bribery Limit should should not be empty and it should be numeric'});
      return;
    }

    if (this.configData.configUserVO.reconAccount.length === 0 || this.configData.configUserVO.wbmUsersEmail.length === 0) {
      this.isValidate = false;
      this.messageService.add({severity: 'error', summary: 'Error Message',
      detail: 'Please fill all the fields that are marked with *'});
      return;
    }

    if (this.configData.configUserVO.purUserId.length === 0 || this.configData.configUserVO.purUserEmail.length === 0 ||
        this.configData.configUserVO.purUserName.length === 0) {
            this.isValidate = false;
            this.messageService.add({severity: 'error', summary: 'Error Message',
               detail: 'Please fill all the fields that are marked with *'});
            return;
    }

    if (this.purProxy) {
      if (this.configData.configUserVO.purProxyUserId.length === 0 || this.configData.configUserVO.purProxyUserEmail.length === 0 ||
        this.configData.configUserVO.purProxyUserName.length === 0 || this.configData.configUserVO.purProxyStart.length === 0 ||
        this.configData.configUserVO.purProxyEnd.length === 0) {
            this.isValidate = false;
            this.messageService.add({severity: 'error', summary: 'Error Message',
               detail: 'Please fill all the fields that are marked with *'});
            return;
      }
    }

    if (this.configData.configUserVO.acctsUserId.length === 0 || this.configData.configUserVO.acctsUserEmail.length === 0 ||
      this.configData.configUserVO.acctsUserName.length === 0) {
          this.isValidate = false;
          this.messageService.add({severity: 'error', summary: 'Error Message',
             detail: 'Please fill all the fields that are marked with *'});
          return;
    }

    if (this.actsProxy) {
      if (this.configData.configUserVO.acctsProxyUserId.length === 0 || this.configData.configUserVO.acctsProxyUserEmail.length === 0 ||
        this.configData.configUserVO.acctsProxyUserName.length === 0 || this.configData.configUserVO.acctsProxyStart.length === 0 ||
        this.configData.configUserVO.acctsProxyEnd.length === 0) {
            this.isValidate = false;
            this.messageService.add({severity: 'error', summary: 'Error Message',
               detail: 'Please fill all the fields that are marked with *'});
            return;
      }
    }

  }

}
