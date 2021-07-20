import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { IBase } from '../shared/interfaces/base';
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
        this.clearUser();
        return throwError(() => new Error(err.error.data));
      })
    ).subscribe();
    this.store.select((state) => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  login(data: { username: string; password: string }): Observable<IBase<IUser>> {
    return this.http.post(`${environment.apiURL}/login`, data, this.httpOptions).pipe(
      tap((res: IBase<IUser>) => this.updateUser(res.data))
    );
  }

  register(data: { username: string; password: string; repeatPassword: string }): Observable<IBase<IUser>> {
    return this.http.post(`${environment.apiURL}/register`, data, this.httpOptions).pipe(
      tap((res: IBase<IUser>) => this.updateUser(res.data))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.apiURL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.clearUser())
    );
  }

  clearUser(): void {
    localStorage.removeItem('user');
    this.store.dispatch(clearUser());
  }

  updateUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.store.dispatch(setUser({ user }));
  }
}
