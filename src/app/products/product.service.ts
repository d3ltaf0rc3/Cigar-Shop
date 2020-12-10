import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../shared/interfaces/product';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts(type: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiURL}/product/get-all/${type}`);
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiURL}/product/get/${id}`);
  }

  addToCart(id: string): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiURL}/product/cart/add`, { id }, { withCredentials: true });
  }

  addToWishlist(id: string): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiURL}/product/wishlist/add`, { id }, { withCredentials: true });
  }

  removeFromWishlist(id: string): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiURL}/product/wishlist/remove`, { id }, { withCredentials: true });
  }

  removeFromCart(id: string): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiURL}/product/cart/remove`, { id }, { withCredentials: true });
  }
}
