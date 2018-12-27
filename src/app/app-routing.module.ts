import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSupplierComponent } from './modules/createSupplier/new-supplier/new-supplier.component';
import { StatusListComponent } from './modules/createSupplier/status-list/status-list.component';
import { VerifySupplierComponent } from './modules/createSupplier/verify-supplier/verify-supplier.component';
import { ConfigurationComponent } from './modules/admin/configuration/configuration.component';

const routes: Routes = [
  { path: '', component: NewSupplierComponent } ,
  { path: 'statuslist', component: StatusListComponent } ,
  { path: 'verifysupplier', component: VerifySupplierComponent } ,
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

