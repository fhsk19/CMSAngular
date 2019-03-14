import { MenuServiceService } from './menu.service';
import { TestBed , inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu';
import { Observable } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('MenuService', () => {
  let service: MenuServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
              TestBed.configureTestingModule({
                imports: [
                  HttpClientTestingModule
                ],
                providers: [MenuServiceService]
              });
              service = TestBed.get(MenuServiceService);
              httpMock = TestBed.get(HttpTestingController);
            });

  it('sample http mocking', () => {
    const menus: Menu[] = [
      new Menu(1000, 500, 'RICE', 60.59, 'VEG', 'TODAY SPECIAL'),
      new Menu(1001, 500, 'VEGRICE', 50.59, 'VEG', 'SPICY')
    ];
    service.getMenu().subscribe(
      (data) => {
        expect(data.length).toBe(2);
        expect(data).toEqual(menus);
      });
    const request = httpMock.expectOne(service.baseURL);
    expect(request.request.method).toBe('GET');
    request.flush(menus);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
