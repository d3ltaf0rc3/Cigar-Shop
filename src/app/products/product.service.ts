import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IBase } from '../shared/interfaces/base';
import { IProduct } from '../shared/interfaces/product';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts(type: string): Observable<IBase<IProduct[]>> {
    return this.http.get<IBase<IProduct[]>>(`${environment.apiURL}/product/get-all/${type}`);
  }

  getProduct(id: string): Observable<IBase<IProduct>> {
    return this.http.get<IBase<IProduct>>(`${environment.apiURL}/product/get/${id}`);
  }

  addToCart(id: string): Observable<IBase<IUser>> {
    return this.http.put<IBase<IUser>>(`${environment.apiURL}/product/cart/add`, { id }, { withCredentials: true });
  }

  addToWishlist(id: string): Observable<IBase<IUser>> {
    return this.http.put<IBase<IUser>>(`${environment.apiURL}/product/wishlist/add`, { id }, { withCredentials: true });
  }

  removeFromWishlist(id: string): Observable<IBase<IUser>> {
    return this.http.delete<IBase<IUser>>(`${environment.apiURL}/product/wishlist/remove/${id}`, { withCredentials: true });
  }

  removeFromCart(id: string): Observable<IBase<IUser>> {
    return this.http.delete<IBase<IUser>>(`${environment.apiURL}/product/cart/remove/${id}`, { withCredentials: true });
  }
}
