import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/orders';

@Injectable()
export class OrdersService {
  putoBaseUrl = 'http://localhost:8080/FTP105/api/orders/update/300';
  postoBaseUrl = 'http://localhost:8080/FTP105/api/customer/placeorder/5';

  public ordArr: Orders[];
  constructor(private httpClient: HttpClient) { }
  getVendOrder(vid: string): Observable<Orders[]> {
    let url = 'http://localhost:8080/FTP105/api/orders/vhistory/'+vid;
    return this.httpClient.get<Orders[]>(url);
  }
  getCustOrders(cid: string): Observable<Orders[]> {
    let url = 'http://localhost:8080/FTP105/api/orders/chistory/'+cid;
    return this.httpClient.get<Orders[]>(url);
  }
  postOrderData(cid: string, or: Orders[]): Observable<any> {
    let url = 'http://localhost:8080/FTP105/api/customer/placeorder/'+cid;
    return this.httpClient.post(url, or);
}
getOrders(): Orders[] {
 return this.ordArr;
}
putOrderData(oid: any, or: Orders): Observable<any> {
  let url = 'http://localhost:8080/FTP105/api/orders/update/'+oid;
  return this.httpClient.put<any>(url, or);
}
getPlacedOrders(vid: any): Observable<Orders[]> {
  let url = 'http://localhost:8080/FTP105/api/orders/placed/'+vid;
  return this.httpClient.get<Orders[]>(url);
}
putOrderCData(oid: any, or: Orders): Observable<any> {
  let url = 'http://localhost:8080/FTP105/api/orders/update/'+oid;
  return this.httpClient.put<any>(url, or);
}
}
