import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustwelcomeComponent } from './custwelcome.component';

describe('CustwelcomeComponent', () => {
  let component: CustwelcomeComponent;
  let fixture: ComponentFixture<CustwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
