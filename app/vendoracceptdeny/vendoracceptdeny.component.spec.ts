import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoracceptdenyComponent } from './vendoracceptdeny.component';
import { OrdersService } from 'src/app/orders.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Orders } from 'src/app/orders';
import { of } from 'rxjs';

 describe('VendoracceptdenyComponent', () => {
  let httpClient : HttpClient;
  let service : OrdersService;
  let component: VendoracceptdenyComponent;
  let fixture: ComponentFixture<VendoracceptdenyComponent>;
  let router : Router;
  let ar : ActivatedRoute;
  let orders : Orders;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoracceptdenyComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    service = new OrdersService(httpClient);
    component = new VendoracceptdenyComponent( service , router , ar );
  });

  it('accept deny order call ngInit with success',()=>{

    let orders:Orders[] = [
      new Orders(313,1,1003,3,90,'16:13:56','16:13:56',501,'2019-03-13','PLACED',null) 
    ];
    localStorage.setItem('vId','501');
      spyOn(service, 'getPlacedOrders').and.returnValue( of(orders));
            component.ngOnInit();
            expect(component.orders).toEqual(orders);
            expect(component.orders).not.toEqual(null);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
