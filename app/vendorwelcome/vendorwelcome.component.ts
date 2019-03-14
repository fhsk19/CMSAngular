import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorwelcome',
  templateUrl: './vendorwelcome.component.html',
  styleUrls: ['./vendorwelcome.component.css']
})
export class VendorwelcomeComponent implements OnInit {
  vId: any;
  vName: any;
  vUserName: any;
  vPhone: any;
  constructor() { }

  ngOnInit() {
  this.vId = localStorage.getItem('vId');
  this.vName = localStorage.getItem('vName');
  this.vPhone = localStorage.getItem('vPhone');
  this.vUserName = localStorage.getItem('vUserName');
  }
}
