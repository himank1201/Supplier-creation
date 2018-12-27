import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isOverlayVisible = false;
  isAppVisible = false;

  public messageSource = new BehaviorSubject(this.isOverlayVisible);
  public appMessageSource = new BehaviorSubject(this.isAppVisible);
  appMessage = this.appMessageSource.asObservable();

  showOverlay(isOverlayVisible: boolean) {
    this.messageSource.next(isOverlayVisible);
  }

  showApplication(isAppVisible: boolean) {
    this.appMessageSource.next(isAppVisible);
  }


}

