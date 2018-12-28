import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVO } from '../model/UserVO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  authenticateUser(userVO: UserVO): Observable<any> {
    return this.http.post('../api/validateUser', userVO).pipe(searchData => searchData);
  }

  getAppConfig(company: string): Observable<any> {
    return this.http.get('../api/getAppConfig?companyCode=' + company + '&rnd=' + new Date().getTime())
                        .pipe(configDetails => configDetails);
  }
}
