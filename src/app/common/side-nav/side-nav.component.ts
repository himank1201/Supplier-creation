import { Component, OnInit, OnDestroy } from '@angular/core';
//import { UpdateService } from '../../services/update.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SidenavComponent implements OnInit, OnDestroy {
  show = false;
  isAdmin: boolean;
  subscription: Subscription;
  menuToggle = true;
  toolmenuToggle = false;
  activeSection
  constructor() {
    // this.isAdmin = false;
    // this.subscription = updateService.getAdmin().subscribe(
    //   isAdmin => {
    //     console.log('Value coming for admin in side nav = ' + isAdmin);
    //     this.isAdmin = isAdmin;
    //   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  flag = false;

  changeFlag(value: boolean) {
  this.flag = value;
  this.show = value;
  }

  
  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

  toggleToolsMenu() {
    this.toolmenuToggle = !this.toolmenuToggle;
  }

  toggleClass(activeSection: any) {

  }

}
