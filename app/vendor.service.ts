import { Injectable } from '@angular/core';
import { Vendor } from './vendor';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private httpClient: HttpClient) { }
  validateLogin(name: string, password: string): Observable<Vendor> {
    console.log('validateLogin');
    const params = new HttpParams()
          .set('vUserName', name)
            .set('vPassword', password);
    console.log(params.toString());
    return this.httpClient.get<Vendor>
        ('http://localhost:8080/FTP105/api/vendor', {params});
  }
}
