import { Vendor } from './../vendor';
import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.css']
})
export class VendordashboardComponent implements OnInit {
  vendors: Vendor[];
  errormsg: any;
  vName: string;
  urlVId: any;
  constructor(private customerserv: VendorService, private ar: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.urlVId = this.ar.snapshot.params['myVendor'];
    console.log('vId: ' + this.urlVId + " " + localStorage.getItem('vId'));
    if (this.urlVId == localStorage.getItem('vId')) {
    this.vName = localStorage.getItem('vName');
    console.log(this.vName);
    this._router.navigate(['/vendordashboard/', this.urlVId]);
  } else {
    alert('Please Login again!!');
    this._router.navigate(['/vendorlogin']);
  }
}
  gotoCustOrdHistory() {
    this._router.navigate(['home/custorderhistory']);
    console.log('Inside Order History!');
  }

    venlogout() {
    this._router.navigate(['']);
    console.log('Log out successful!');
  }
  gotovDash() {
    this._router.navigate(['vendordashboard']);
    console.log('Logout Cancelled!');
  }
  vconf(): void {
    let txt: any;
    let r: any = confirm('Do you want to Logout?');
    if (r == true) {
      txt = 'You pressed OK!';
      this.venlogout();
    } else {
      txt = 'You pressed Cancel!';
      this.gotovDash();
    }
  }
}
