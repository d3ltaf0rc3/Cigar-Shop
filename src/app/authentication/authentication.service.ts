import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  login(data: object): Observable<any> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions);
  }

  register(data: object): Observable<any> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiURL}/logout`);
  }
}
