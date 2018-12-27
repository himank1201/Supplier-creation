import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserVO } from 'src/app/model/UserVO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: UserVO;
  userName: string;
  show = false;
  count = 1;

  @Output()
  emitFunctionOfParent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userData = this.authService.getUserData();
    this.userName = this.userData.userName;
  }




  clickMe() {
    if (this.count % 2 === 0) {
      this.emitFunctionOfParent.emit(false);
      this.show = false;
      this.count++;
    } else {
      this.emitFunctionOfParent.emit(true);
      this.show = true;
      this.count--;
    }
  }

  logOut() {
    localStorage.clear();
  }

}
