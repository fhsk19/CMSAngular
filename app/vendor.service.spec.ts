import { TestBed } from '@angular/core/testing';

import { VendorService } from './vendor.service';
import { Vendor } from './vendor';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('VendorService', () => {
  let service : VendorService;
  let httpMock :HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers:[VendorService]
      });          
      service = TestBed.get(VendorService);
      httpMock = TestBed.get(HttpTestingController);
    });
    

  it('should be created', () => {
    const service: VendorService = TestBed.get(VendorService);
    expect(service).toBeTruthy();
  });
it('checking for vendor login mock http',()=>{
  // const  customers:Customer[]=new Customer(1,'sivaram',1139.64,'siva','pass001')
  const vendors:Vendor = new Vendor(500,'SURESH','VENDOR500','SURESHP',9915382411);
   service.validateLogin('SURESHP','VENDOR500').subscribe(
     (data) => {
    
      expect(data).toEqual(vendors);
     });
    let vendurl = 'http://localhost:8080/FTP105/api/vendor?vUserName=SURESHP&vPassword=VENDOR500';
   const request = httpMock.expectOne(vendurl);
   expect(request.request.method).toBe('GET');
   request.flush(vendors);

 });
  afterEach(() => { 
   httpMock.verify();
 });
});
