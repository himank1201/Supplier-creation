import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavComponent } from './common/side-nav/side-nav.component';
import { SharedService } from './services/shared.service';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  show = false;
  title = 'app';
  isAppVisible = false;
  isLoginVisible = true;

  isOverlayVisible;

  @ViewChild(SidenavComponent) private _child: SidenavComponent;

  constructor(private sharedService: SharedService) {
    this.sharedService.messageSource.subscribe(isOverlayVisible => this.isOverlayVisible = isOverlayVisible);
    this.sharedService.appMessageSource.subscribe(isAppVisible => {
      this.isAppVisible = isAppVisible;
      this.isLoginVisible = !isAppVisible;
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnInit() {
  //   this.validateUser();
  // }

  // validateUser() {
  //   this.isOverlayVisible = !this.isOverlayVisible;
  // }

headerMenu(value: any) {
     this._child.changeFlag(value);
     this.show = value;
  }

}
