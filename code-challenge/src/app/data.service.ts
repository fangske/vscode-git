import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealer } from './dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users' 
  //'https://api.mercedes-benz.com/dealer/v1/dealers?pageSize=2&city=Stuttgart&brand=SMT&fields=dealers(dealerId,legalName,address)&apikey=622f14f4-c06c-41aa-b975-45f2970244e1';

  constructor(private _http: HttpClient) { }

  getDealers() {
    return this._http.get<Dealer[]>(this.apiUrl);
  }
}
