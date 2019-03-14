
import { MenuServiceService } from 'src/app/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { CustorderhistoryComponent } from './custorderhistory/custorderhistory.component';
import { CustshowwalletComponent } from './custshowwallet/custshowwallet.component';
import { CustplaceorderComponent } from './custplaceorder/custplaceorder.component';
import { VendororderhistoryComponent } from './vendororderhistory/vendororderhistory.component';
import { VendoracceptdenyComponent } from './vendoracceptdeny/vendoracceptdeny.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustwelcomeComponent } from './custwelcome/custwelcome.component';
import { VendorwelcomeComponent } from './vendorwelcome/vendorwelcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustloginComponent,
    VendorloginComponent,
    CustdashboardComponent,
    VendordashboardComponent,
    CustorderhistoryComponent,
    CustshowwalletComponent,
    CustplaceorderComponent,
    VendororderhistoryComponent,
    VendoracceptdenyComponent,
    CustwelcomeComponent,
    VendorwelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MenuServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
