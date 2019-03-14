import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdersService } from 'src/app/orders.service';
import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/orders';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-vendoracceptdeny',
  templateUrl: './vendoracceptdeny.component.html',
  styleUrls: ['./vendoracceptdeny.component.css'],
  providers:[OrdersService]
})
export class VendoracceptdenyComponent implements OnInit {
  OrdersService: any;
  errorMsg: any;
  orders: Orders[];
  vid: any;



  constructor(private ordersServ : OrdersService,
    private _router:Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vid = localStorage.getItem('vId');
    this.ordersServ.getPlacedOrders(this.vid)
    .subscribe(
      data => this.orders = data,
      error => this.errorMsg = error
    );

  }
  toggleSelect(orders: Orders , argSel: boolean) {
    orders.isSelected = argSel;
   }

   o: number;
   v: any;
   s: string='DELIVERED';
   c: any;
   w: any;

  putS: boolean = false;
  putstr: any;
  t:any;
  d:any;
  acceptorder(): void {
    let ord: Orders;
    for(ord of this.orders) {
      if(ord.isSelected == true) {
        this.o = ord.oid;
        this.v = localStorage.getItem('vId');
        this.s = ord.ostatus;
        this.updateAcceptOrder(this.o, this.v, this.s);
        alert('Accepted Order');
      }
    }
  }


  denyorder(): void {
    let ord: Orders;
    for (ord of this.orders) {
      if (ord.isSelected == true) {
        this.o = ord.oid;
        this.v = localStorage.getItem('vId');
        this.s = ord.ostatus;
        this.updateDenyOrder(this.o, this.v, this.s, this.c, this.w);
        alert('Denied Order');
      }
    }
  }


  updateAcceptOrder(argOid: number, argvenId: number, oStatus: string) {
    oStatus = 'DELIVERED',
    console.log('update order' + argOid + ' ' + argvenId + ' ' + oStatus );
    let or: Orders = new Orders(argOid, 0, 0, 0, 0, this.t , this.t, argvenId, this.d, oStatus,"Thanks for visiting");
    this.ordersServ.putOrderData(argOid, or)
    .subscribe(
      data => {
         this.putstr = data;
         console.log('put success', data);
         this.putS = true;
         console.log('putS');
  },
  error => {
    console.log('error', error);
  }
)}

updateDenyOrder(argOid: number, argvenId: number, oStatus: string, argCid: number, argWallet: number) {
  oStatus = 'CANCELLED';
  console.log('denied order' + argOid + ' ' + argvenId + ' ' + oStatus );
  let or: Orders = new Orders(argOid, 0, 0, 0, 0, this.t , this.t, argvenId, this.d, oStatus, 'sorry');
  this.ordersServ.putOrderData(argOid, or);
  console.log('update customer data' + argCid + ' ' + argWallet);
  let c: Customer = new Customer(argCid, ' ', argWallet, ' ', ' ');
  this.ordersServ.putOrderCData(argOid, or)
  .subscribe(
    data => {
       this.putstr = data;
       console.log('put success', data);
       this.putS = true;
       console.log('putS');
},
error => {
  console.log('error', error);
}
)}

}

/*
curl -vvv -i -H "Accept: application/json" -H "Content-Type: application/json" -X PUT http://localhost:8080/FTP105/api/orders/update/305 -d {"oid":305,"cid":1,"foodId":1005,"qty":2,"totalPrice":80.0,"estimatedTime":"17:14:24","orderTime":"17:14:24","orderDate":1551033000000,"vid":502,"ostatus":"DELIVERED","ocomment":"xx"}
*/
