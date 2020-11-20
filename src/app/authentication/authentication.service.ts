import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(data: {username: string, password: string}): Observable<any> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions);
  }

  register(data: {username: string, password: string, repeatPassword: string}): Observable<any> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiURL}\logout`);
  }
}
