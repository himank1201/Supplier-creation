import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isOverlayVisible = false;

  public messageSource = new BehaviorSubject(this.isOverlayVisible);

  showOverlay(isOverlayVisible: boolean) {
    this.messageSource.next(isOverlayVisible);
  }

}

