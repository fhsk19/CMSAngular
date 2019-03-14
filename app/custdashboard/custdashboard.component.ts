import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from '../orders';

@Component({
  selector: 'app-custdashboard',
  templateUrl: './custdashboard.component.html',
  styleUrls: ['./custdashboard.component.css'],
  providers: [CustomerService]
})
export class CustdashboardComponent implements OnInit {
  Customer: any;
  errorMsg: any;
  orders: Orders[];
  cid: string ;
  cName: string;
  urlCId: any;

  constructor(private _router: Router,
              private ar: ActivatedRoute) { }

    ngOnInit() {
      this.cName = localStorage.getItem('cName');
      this.urlCId = this.ar.snapshot.params['myCustomer'];
      console.log('cId: ' + this.urlCId + ' ' + localStorage.getItem('cId'));
      if (this.urlCId == localStorage.getItem('cId')) {
      this._router.navigate(['/custdashboard/', this.urlCId]);
    } else {
      alert('Please Login again!!');
      this._router.navigate(['/custlogin']);
    }
  }
  gotoCustOrdHistory() {
    this._router.navigate(['home/custorderhistory']);
    console.log('Inside Order History!');
  }

  gotoDash() {
    this._router.navigate(['custdashboard']);
    console.log('Logout Cancelled!');
  }
    cuslogout() {
    this._router.navigate(['']);
    console.log('Log out successful!');
  }
  conf(): void {
    let txt: any;
    let r: any = confirm('Do you want to Logout?');
    if (r == true) {
      txt = 'You pressed OK!';
      this.cuslogout();
    } else {
      txt = 'You pressed Cancel!';
      this.gotoDash();
    }
  }
}
