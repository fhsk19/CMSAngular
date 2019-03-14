import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Orders } from 'src/app/orders';

@Component({
  selector: 'app-vendororderhistory',
  templateUrl: './vendororderhistory.component.html',
  styleUrls: ['./vendororderhistory.component.css'],
  providers:[OrdersService]
})
export class VendororderhistoryComponent implements OnInit {

  errorMsg : any;
  orders: Orders[];
  vid: string;


  constructor(private ordersServ: OrdersService) { }

  ngOnInit() {
    this.vid = localStorage.getItem('vId');
    this.ordersServ.getVendOrder(this.vid)
    .subscribe(
      data => this.orders = data,
      error => this.errorMsg = error
    );

  }
}
