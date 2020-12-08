import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
  user = localStorage.getItem('user');
  constructor(private http: HttpClient) { }

  login(data: object): Observable<any> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions).pipe(
      tap((user) => {
        localStorage.setItem('user', user);
        this.user = user;
      })
    );
  }

  register(data: object): Observable<any> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions).pipe(
      tap((user) => {
        localStorage.setItem('user', user);
        this.user = user;
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiURL}/logout`, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.setItem('user', '');
        this.user = '';
      })
    );
  }
}
