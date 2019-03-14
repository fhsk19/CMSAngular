import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustplaceorderComponent } from './custplaceorder.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CustplaceorderComponent', () => {
let component: CustplaceorderComponent;
let fixture: ComponentFixture<CustplaceorderComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ CustplaceorderComponent ],
imports:[ReactiveFormsModule,HttpClientModule],
schemas: [NO_ERRORS_SCHEMA]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(CustplaceorderComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});


});

