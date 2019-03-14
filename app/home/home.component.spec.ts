import { Menu } from './../menu';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import { HomeComponent } from './home.component';
import { MenuServiceService } from '../menu.service';
import { HttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let httpClient: HttpClient;
  let service: MenuServiceService;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MenuServiceService(httpClient);
    component = new HomeComponent(service);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should call ngInit with success', () => {
    let menu = [new Menu(1000, 500, 'RICE', 60.59, 'VEG', 'TODAY SPECIAL'),
    new Menu(1001, 500, 'VEGRICE', 50.59, 'VEG', 'SPICY')
    ];
    spyOn(service, 'getMenu').and
    .returnValue(of(menu));
    component.ngOnInit();
    expect(component.menus).toEqual(menu);
    expect(component.menus).not.toEqual(null);
    });
  });

