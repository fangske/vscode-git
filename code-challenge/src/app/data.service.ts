import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealer } from './dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:3000' 

  constructor(private _http: HttpClient) { }

  getDealers() {
    return this._http.get<Dealer[]>(this.apiUrl);
  }
}
