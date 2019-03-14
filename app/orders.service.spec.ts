import { TestBed , inject } from '@angular/core/testing';
import {   HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { OrdersService } from './orders.service';
import { Orders } from 'src/app/orders';

describe('OrdersService', () => {
  let service : OrdersService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[OrdersService]
    });
    service = TestBed.get(OrdersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('accept deny order',()=> {
    let oid: any ="300";
    const orders:Orders = new Orders(300,1,1000,1,60.59,'00:10:00','12:46:03',500,'2019-02-06','DELIVERED','thanks');
    service.putOrderData(oid,orders).subscribe(
      (data)=> {
        console.log(data);
        expect(data).toEqual(orders);
      });
      const request1 = httpMock.expectOne(service.putoBaseUrl);
      expect(request1.request.method).toBe('PUT');
      request1.flush(orders);
    });

    it('place order',()=> {
      let cid: any ="5";
      const orders:Orders[] = new Orders(311,5,1000,1,60.59,'00:10:00','12:35:03',500,'2019-03-13','PLACED','vandanam');
      service.postOrderData(cid,orders).subscribe(
        (data)=> {
          console.log(data);
          expect(data).toEqual(orders);
        });
        const request1 = httpMock.expectOne(service.postoBaseUrl);
        expect(request1.request.method).toBe('POST');
        request1.flush(orders);
      });
  
      afterEach(() => { 
        httpMock.verify();
      });
 
      
   it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });

  it('based on vendorhistory - sample http mocking',()=>{
    const orders :Orders[] = [
      new Orders(306,1,1002,1,20.0,'18:26:57','18:26:57',501,'1551897000000','CANCELLED',null),
     new Orders(306,1,1002,1,20.0,'18:26:57','18:26:57',501,'1551897000000','PLACED',null)
    ];
    service.getVendOrder('501').subscribe(
      (data) => {
        expect(data.length).toBe(2);
        expect(data).toEqual(orders);
      });
      let url = 'http://localhost:8080/FTP105/api/orders/vhistory/501'
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(orders);

  });
  afterEach(() => { 
    httpMock.verify();
  });
});