import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdashboardComponent } from './custdashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('CustdashboardComponent', () => {
  let component: CustdashboardComponent;
  let fixture: ComponentFixture<CustdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustdashboardComponent ],
      imports:[RouterTestingModule,HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
