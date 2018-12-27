import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { UserVO } from 'src/app/model/UserVO';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userVO = new UserVO();
  authenticatedUser: UserVO;

  constructor(private supplierService: SupplierService, private sharedService: SharedService, private router: Router,
     private messageService: MessageService) { }

  ngOnInit() {
  }

  authenticateUser() {
    if (this.userVO.userId.length !== 0 && this.userVO.pd.length !== 0) {  
      this.supplierService.authenticateUser(this.userVO).subscribe(reqData => {
        this.authenticatedUser = reqData;
        console.log('User data = ' , this.authenticatedUser);
        if (this.authenticatedUser.success) {
          this.sharedService.showApplication(true);
          this.router.navigate(['statuslist']);
        }
      });
    } else {
      this.messageService.add({severity: 'error', summary: 'Error Message', detail: 'Please enter userid and password !'});
    }
  }

}
