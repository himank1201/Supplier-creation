import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVO } from '../model/UserVO';
import { Observable } from 'rxjs';
import { Config } from '../model/Config';
import { SupplierVO } from '../model/SupplierVO';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  authenticateUser(userVO: UserVO): Observable<any> {
    // return this.http.post('../api/validateUser', userVO).pipe(searchData => searchData);
    return this.http.post('http://localhost:9080/SupWeb/api/validateUser', userVO).pipe(searchData => searchData);
  }

  getAppConfig(company: string): Observable<any> {
   /*  return this.http.get('../api/getAppConfig?companyCode=' + company + '&rnd=' + new Date().getTime())
                        .pipe(configDetails => configDetails); */
    return this.http.get('http://localhost:9080/SupWeb/api/getAppConfig?companyCode=' + company + '&rnd=' + new Date().getTime())
                        .pipe(configDetails => configDetails);
  }

  saveAppConfig(config: Config): Observable<any> {
    // return this.http.post('../api/saveConfig', config).pipe(configDetails => configDetails);
    return this.http.post('http://localhost:9080/SupWeb/api/saveConfig', config).pipe(configDetails => configDetails);
  }

  validateSupplier(supplierVO: SupplierVO): Observable<any> {
    return this.http.post('http://localhost:9080/SupWeb/api/validateSupplier', supplierVO).pipe(supDetails => supDetails);
  }

  getCCMgrDetails(costCenter: string, ccSel: string): Observable<any> {
    return this.http.get('http://localhost:9080/SupWeb/api/getCCMgrDetails?costCenter=' + costCenter + '&companyCode='
     + ccSel + '&rnd=' + new Date().getTime()).pipe(ccDetails => ccDetails);
  }

  createSupplier(supplierVO: SupplierVO): Observable<any> {
    return this.http.post('http://localhost:9080/SupWeb/api/createSupplier', supplierVO).pipe(supDetails => supDetails);
  }
}
