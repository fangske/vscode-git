import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from './dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = 'DpgOLGAPLO8DAASk3e2SxvtWNWRZd3lXWX8GbWbaFuPlHC5BFpUoFAOLhZmRR41e'
  apiUrl = 'https://damiler-getone-api.eu-gb.mybluemix.net/api/mlabs?access_token=' + this.apiKey 

  constructor(private _http: HttpClient) { }

  getDealers() {
    return this._http.get<Dealer[]>(this.apiUrl);
  }
}
