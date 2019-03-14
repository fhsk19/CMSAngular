import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendororderhistoryComponent } from './vendororderhistory.component';
import { HttpClient } from '@angular/common/http';

import { VendorloginComponent } from '../vendorlogin/vendorlogin.component';
import { Vendor } from '../vendor';
import { Orders } from '../orders';
import { Observable,of } from 'rxjs';
import { OrdersService } from '../orders.service';

describe('VendororderhistoryComponent', () => {
  let httpClient : HttpClient;
  let service : OrdersService;
  let component: VendororderhistoryComponent;
  let fixture: ComponentFixture<VendororderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendororderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new OrdersService(httpClient);
    component = new VendororderhistoryComponent(service);
  });

  it('should call ngInit with success',() => {
    let std = [
      new Orders(306,1,1002,1,20.0,'18:26:57','18:26:57',501,'1551897000000','CANCELLED',null),
     new Orders(306,1,1002,1,20.0,'18:26:57','18:26:57',501,'1551897000000','PLACED',null)
    ];
    localStorage.setItem('vId','501')
    spyOn(service,'getVendOrder').and
    .returnValue(of(std));
    component.ngOnInit();
    expect(component.orders).toEqual(std);
    expect(component.orders).not.toEqual(null);
      });
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
    

