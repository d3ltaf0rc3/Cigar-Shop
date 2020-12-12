import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';
import { setUser, clearUser } from '../+store/actions';

@Injectable()
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
  user: IUser;
  constructor(private http: HttpClient, private store: Store<IRootState>) {
    this.store.select((state) => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  login(data: object): Observable<IUser> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions).pipe(
      tap((user: IUser) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.store.dispatch(setUser({ user }));
      })
    );
  }

  register(data: object): Observable<IUser> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions).pipe(
      tap((user: IUser) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.store.dispatch(setUser({ user }));
      })
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
