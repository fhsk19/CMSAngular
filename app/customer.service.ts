import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpParams , HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) { }
  verifyNamePassword(name: string, password: string): Observable<Customer> {
    console.log('verifyNamePassword');
    const params = new HttpParams()
    .set('cUserName', name)
    .set('cPassword', password);
    console.log(params.toString());
    return this.httpClient.get<Customer>
    ('http://localhost:8080/FTP105/api/customer', {params});
  }

  getWallet(cid: string): Observable<Customer[]> {
    let url = 'http://localhost:8080/FTP105/api/customer/' + cid;
    return this.httpClient.get<Customer[]>(url);
  }

}


