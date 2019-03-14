import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { CustomerService } from './customer.service';
import { Customer } from './customer';

describe('CustomerService', () => {
  let service :  CustomerService;
  let httpMock :HttpTestingController;
  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[CustomerService]
    });          
    service = TestBed.get(CustomerService);
    httpMock = TestBed.get(HttpTestingController);
  });
      
  it('checking for wallet http mock',()=>{
   // const  customers:Customer[]=new Customer(1,'sivaram',1139.64,'siva','pass001')
   const customers:Customer[] = [
    new Customer(1,'sivaram',1139.64,'siva','pass001')
  ];
    service.getWallet('1').subscribe(
      (data) => {
    
        expect(data).toEqual(customers);
      });
     let walleturl = 'http://localhost:8080/FTP105/api/customer/1';
    const request = httpMock.expectOne(walleturl);
    expect(request.request.method).toBe('GET');
    request.flush(customers);

  });
  afterEach(() => { 
    httpMock.verify();
  });

  it('checking for customer login mock http',()=>{
    // const  customers:Customer[]=new Customer(1,'sivaram',1139.64,'siva','pass001')
    const customers:Customer = new Customer(1,'sivaram',1139.64,'siva','pass001');
     service.verifyNamePassword('siva','pass001').subscribe(
       (data) => {
    
        expect(data).toEqual(customers);
       });
      let custturl = 'http://localhost:8080/FTP105/api/customer?cUserName=siva&cPassword=pass001';
     const request = httpMock.expectOne(custturl);
     expect(request.request.method).toBe('GET');
     request.flush(customers);
 
   });
   afterEach(() => { 
     httpMock.verify();
   });    
   
});