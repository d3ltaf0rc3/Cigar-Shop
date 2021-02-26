import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { environment } from '../../environments/environment';
import { IProduct } from '../shared/interfaces/product';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiURL}/user/profile`, { withCredentials: true });
  }

  getList(type: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiURL}/user/list/${type}`, { withCredentials: true });
  }

  changePassword(data: { currentPassword: string; newPassword: string; repeatNewPassword: string }): Observable<IUser> {
    return this.http.put<IUser>(`${environment.apiURL}/user/change-password`, data, { withCredentials: true });
  }

  deleteProfile(): Observable<IUser> {
    return this.http.delete<IUser>(`${environment.apiURL}/user/delete`, { withCredentials: true });
  }

  clearWishlist(): Observable<IUser> {
    return this.http.delete<IUser>(`${environment.apiURL}/user/wishlist`, { withCredentials: true });
  }
}
