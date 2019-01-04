import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  private loadingSource = new Subject<boolean>();
  loading$ = this.loadingSource.asObservable();

  changeLoading(loading: boolean) {
    this.loadingSource.next(loading);
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }
}
