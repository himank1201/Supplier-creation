import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewSupplierComponent } from './modules/createSupplier/new-supplier/new-supplier.component';
import { StatusListComponent } from './modules/createSupplier/status-list/status-list.component';
import { VerifySupplierComponent } from './modules/createSupplier/verify-supplier/verify-supplier.component';
import { ConfigurationComponent } from './modules/admin/configuration/configuration.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/side-nav/side-nav.component';
import { DropdownModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './common/data-table/data-table.component';
import { LoginComponent } from './modules/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NewSupplierComponent,
    StatusListComponent,
    VerifySupplierComponent,
    ConfigurationComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DataTableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
