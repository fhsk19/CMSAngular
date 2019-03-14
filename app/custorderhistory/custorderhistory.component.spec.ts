
import { OrdersService } from './../orders.service';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable,of } from 'rxjs';

import { CustorderhistoryComponent } from './custorderhistory.component';
import { Orders } from 'src/app/orders';



describe('CustorderhistoryComponent', () => {
  let httpClient : HttpClient;
  let service : OrdersService;
  let component: CustorderhistoryComponent;
  let fixture: ComponentFixture<CustorderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustorderhistoryComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(()=>{
    service = new OrdersService(httpClient);
    component = new CustorderhistoryComponent( service );
  });
  
  it('should call ngInit with success',()=>{
    let std =[
      new Orders(300,1,1000,1,60.59,'00:10:00','12:46:03',500,'2019-02-06','PLACED',null),
      new Orders(302,1,1000,2,220.0,'00:15:00','12:56:53',500,'2019-02-06','DELIVERED',null)
    ];
    localStorage.setItem('cId','1');
      spyOn(service, 'getCustOrders').and
            .returnValue( of(std));
            component.ngOnInit();
            expect(component.orders).toEqual(std);
            expect(component.orders).not.toEqual(null);
  });

  /*beforeEach(() => {
    fixture = TestBed.createComponent(CustorderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


