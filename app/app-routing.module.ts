import { VendorwelcomeComponent } from './vendorwelcome/vendorwelcome.component';
import { CustwelcomeComponent } from './custwelcome/custwelcome.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { CustshowwalletComponent } from './custshowwallet/custshowwallet.component';
import { CustplaceorderComponent } from './custplaceorder/custplaceorder.component';
import { CustorderhistoryComponent } from './custorderhistory/custorderhistory.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustloginComponent } from './custlogin/custlogin.component';
import { HomeComponent } from './home/home.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { VendororderhistoryComponent } from './vendororderhistory/vendororderhistory.component';
import { VendoracceptdenyComponent } from './vendoracceptdeny/vendoracceptdeny.component';

export const custCHILD_ROUTES: Routes = [
  {path: '', component: CustwelcomeComponent},
  {path: 'custorderhistory', component: CustorderhistoryComponent},
  {path: 'custplaceorder', component: CustplaceorderComponent},
  {path: 'custshowwallet', component: CustshowwalletComponent}
];
export const venCHILD_ROUTES: Routes = [
    {path: '', component: VendorwelcomeComponent},
    {path: 'vendoracceptdeny', component: VendoracceptdenyComponent},
    {path: 'vendororderhistory', component: VendororderhistoryComponent}
];

const routes: Routes = [
    {path: 'custlogin', component: CustloginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'custdashboard/:myCustomer', component: CustdashboardComponent, children: custCHILD_ROUTES},
    {path: 'vendorlogin', component: VendorloginComponent},
    {path: 'vendordashboard/:myVendor', component: VendordashboardComponent, children: venCHILD_ROUTES},
    {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
