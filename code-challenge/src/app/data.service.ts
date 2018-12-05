import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from './url.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = 'DpgOLGAPLO8DAASk3e2SxvtWNWRZd3lXWX8GbWbaFuPlHC5BFpUoFAOLhZmRR41e'
  apiUrl = 'https://damiler-getone-api.eu-gb.mybluemix.net/api/mlabs?access_token=' + this.apiKey 

  constructor(private _http: HttpClient) { }

  getUrl() {
    return this._http.get<Url[]>(this.apiUrl);
  }
}
