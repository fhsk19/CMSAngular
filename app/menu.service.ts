import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MenuServiceService {
  constructor(private httpClient: HttpClient) { }
  baseURL = 'http://localhost:8080/FTP105/api/menu';
  public getMenu(): Observable<Menu[]> {
    console.log('I am here get HTTP');
    let myurl = this.baseURL;
    return this.httpClient.get<Menu[]>(myurl);
  }
}
