import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custwelcome',
  templateUrl: './custwelcome.component.html',
  styleUrls: ['./custwelcome.component.css']
})
export class CustwelcomeComponent implements OnInit {
  cId: any;
  cName: any;
  cUserName: any;
  constructor() { }

  ngOnInit() {
  this.cId = localStorage.getItem('cId');
  this.cName = localStorage.getItem('cName');
  this.cUserName = localStorage.getItem('cUserName');
  }

}
