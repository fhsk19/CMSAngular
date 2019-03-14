import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorwelcomeComponent } from './vendorwelcome.component';

describe('VendorwelcomeComponent', () => {
  let component: VendorwelcomeComponent;
  let fixture: ComponentFixture<VendorwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
