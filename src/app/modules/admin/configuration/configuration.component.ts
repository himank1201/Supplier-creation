import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/model/Config';
import { AuthService } from 'src/app/services/auth.service';
import { SelectItem } from 'primeng/api';
import { AdminUsers } from 'src/app/model/AdminUsers';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.configData = this.authService.getConfigData();
    this.adminUsers = this.configData.adminUsers;
    this.adminUsersDropDownValues = [];
    this.adminUsersDropDownValues.push({label: 'Admin Users', value: null});
    this.adminUsers.forEach(adminUser => {
      this.adminUsersDropDownValues.push({label: adminUser.adminUserId, value: adminUser.adminUserId});
    });

    this.companyDropDownValues = [{ label: 'US01', value: 'US01' }, { label: '1330', value: '1330' }];
  }

}
