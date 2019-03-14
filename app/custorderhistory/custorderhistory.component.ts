import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/orders';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-custorderhistory',
  templateUrl: './custorderhistory.component.html',
  styleUrls: ['./custorderhistory.component.css'],
  providers: [OrdersService]
})
export class CustorderhistoryComponent implements OnInit {
  errorMsg: any;
  orders: Orders[];
  cid: string;


  constructor(private ordersServ: OrdersService) { }

  ngOnInit() {
    this.cid = localStorage.getItem('cId');
    console.log(this.cid);
    this.ordersServ.getCustOrders(this.cid)
    .subscribe(
      data => this.orders = data,
      error => this.errorMsg = error
    );
  }

}
