import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from './url.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  getUrl() {
    return this.http.get<Url[]>(this.baseUrl);
  }

  getUrlById(id: number) {
    return this.http.get<Url>(this.baseUrl + '/' + id);
  }

  hashURL(url: Url) {
    return this.http.post(this.baseUrl, url);
  }

  rediectURL(user: Url) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

}
