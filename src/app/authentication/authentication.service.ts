import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';
import { setUser, clearUser } from '../+store/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    }),
    withCredentials: true
  };
  user: IUser;

  constructor(private http: HttpClient, private store: Store<IRootState>) {
    this.http.get(`${environment.apiURL}/user/verify`, { withCredentials: true }).pipe(
      catchError(err => {
        localStorage.removeItem('user');
        this.store.dispatch(clearUser());
        return throwError(err);
      })
    ).subscribe();
    this.store.select((state) => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  login(data: { username: string; password: string }): Observable<IUser> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions).pipe(
      tap((user: IUser) => this.updateUser(user))
    );
  }

  register(data: { username: string; password: string; repeatPassword: string }): Observable<IUser> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions).pipe(
      tap((user: IUser) => this.updateUser(user))
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiURL}/logout`, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('user');
        this.store.dispatch(clearUser());
      })
    );
  }

  updateUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.store.dispatch(setUser({ user }));
  }
}
