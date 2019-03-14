import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custshowwallet',
  templateUrl: './custshowwallet.component.html',
  styleUrls: ['./custshowwallet.component.css'],
  providers: [CustomerService]
})
export class CustshowwalletComponent implements OnInit {
  errormsg: any;
  cid: string;
  wallet: any;
  cName: string;
  constructor(private customerserv: CustomerService) { }

  ngOnInit() {
    this.cid = localStorage.getItem('cId');
    console.log(this.cid);
    this.cName = localStorage.getItem('cName');
    this.customerserv.getWallet(this.cid)
    .subscribe(
      data => this.wallet = data,
      error => this.errormsg = error
    );
  }

}
