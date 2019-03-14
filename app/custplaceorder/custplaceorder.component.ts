import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-custplaceorder',
  templateUrl: './custplaceorder.component.html',
  styleUrls: ['./custplaceorder.component.css'],
  providers: [MenuServiceService, OrdersService, CustomerService],
  styles: [`
  .ng-invalid {
    border: 2px solid: red;

  };
  .ng-valid {
    border: 2px solid : green;
  };
  `]
})
export class CustplaceorderComponent implements OnInit {
  menus: Menu[];
  username: string;
  errorMsg: any;
  newMenu: any;
  _router: any;
  vid: any;
  t: any;
  d: any;
  menu: any;
  loaded: boolean = false;
  postS: boolean = false;
  poststr: any = '';
  fid: number;
  qty: number;
  cid: string;
  rand: any;
  ordArr: Orders[] = [];
  msg: string = 'insufficient balance';
  constructor(private router: Router, private customerserv: CustomerService,
              private orderService: OrdersService, private _menuService: MenuServiceService) { }

  ngOnInit() {
  this._menuService.getMenu().subscribe(
    data => this.menus = data,
    error => this.errorMsg = error
 );
  }

  addOrder() {
    let menu: Menu;
    for (menu of this.menus) {
    if (menu.isSelected == true) {
      this.fid = menu.foodId;
      this.cid = localStorage.getItem('cId');
      this.qty = menu.qty;
      let or: Orders = new Orders
      (0, parseInt(this.cid), this.fid, this.qty, 0, this.t, this.t, parseInt(this.vid), this.d, 'PLACED', '');
      this.ordArr.push( or );
    }
  }
    if ( this.ordArr.length > 0 ) {
      this.addOrderByRest(this.fid, this.qty, this.cid);
      this.rand = Math.floor(Math.random() * (1001));
      alert('Order Placed Successfully!!! Your Token number is: ' + this.rand);
  }
  }
  addOrderByRest(fid, qty, cid) {
    this.vid = localStorage.getItem('vId');
    console.log('Placing Order');
    this.orderService.postOrderData(this.cid,this.ordArr)
    .subscribe(
      data => {
        this.poststr = data;
        if (this.poststr.msg == this.msg) {
          alert('Orders cancelled as you have ' + this.poststr.msg);
        }
        console.log('post success', data);
        this.postS = true;
        console.log(data);
      },

      error => {
        this.errorMsg = error;
        console.log('Error', error);
      }
    );
  }

  toggleSelect(menu: Menu , argSel: boolean) {
    menu.isSelected = argSel;
  }
  calc(menu: Menu): number {
    let calc: number = 0;
    if ( menu.isSelected) {
      if ( menu.qty > 0) {
        calc = +(menu.qty) * +(menu.price);
        menu.tPrice = calc;
        console.log(menu.tPrice);
        localStorage.setItem('tPrice', this.calc + '');
      }
    }
    return calc;
  }
  gotoPlaceOrder(): void {
      this._router.navigate(['/custplaceorder']);
    }
    trackByFn(index: number, menu: Menu) {
      return menu;
    }
    gotoDash() {
      this._router.navigate(['']);
      console.log('Place Order Cancelled!');
    }

    myFunction(): void {
      let txt: any;
      let r: any = confirm('Do you want to order the selected?');
      if (r == true) {
        txt = 'You pressed OK!';
        this.addOrder();
      } else {
        txt = 'You pressed Cancel!';
        this.gotoDash();
      }
    }
}
