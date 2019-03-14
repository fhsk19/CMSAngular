import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { of } from 'rxjs';
import { CustshowwalletComponent } from './custshowwallet.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

describe('CustomerwalletComponent', () => {
  let httpClient: HttpClient;
  let service: CustomerService;
  let component: CustshowwalletComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustshowwalletComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new CustomerService(httpClient);
    component = new CustshowwalletComponent(service);
  });

  it('should show wallet', () => {
    expect(component).toBeTruthy();
  });

  it(' should call ngInit with success', () => {
    let wallet = 1278.88;
    spyOn(service, 'getWallet').and.returnValue( of(wallet));
    component.ngOnInit();
    console.log(component.wallet);
    expect(component.wallet).toEqual(wallet);
    expect(component.wallet).not.toEqual(null);
  });
});
