import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = localStorage.getItem('Name');

  constructor() { }

  ngOnInit() {
  }
  show = false;
  count = 1;

  @Output()
  emitFunctionOfParent: EventEmitter<any> = new EventEmitter<any>();

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
