import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from './url.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://damiler-getone-api.eu-gb.mybluemix.net/api/mlabs';

  getUrl() {
   return this.http.get<Url[]>(this.baseUrl);
  }

}
