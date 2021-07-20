import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { environment } from '../../environments/environment';
import { IBase } from '../shared/interfaces/base';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private store: Store<IRootState>) { }

  getList(list: string): Observable<any> {
    return this.store.select((state) => state.auth.user[list]);
  }

  changePassword(data: { currentPassword: string; password: string; repeatPassword: string }): Observable<IBase<string>> {
    return this.http.put<IBase<string>>(`${environment.apiURL}/user/change-password`, data, { withCredentials: true });
  }

  deleteProfile(): Observable<IBase<string>> {
    return this.http.delete<IBase<string>>(`${environment.apiURL}/user/delete`, { withCredentials: true });
  }

  clearWishlist(): Observable<IBase<IUser | string>> {
    return this.http.delete<IBase<IUser | string>>(`${environment.apiURL}/user/wishlist`, { withCredentials: true });
  }
}
