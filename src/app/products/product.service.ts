import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../shared/interfaces/product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiURL}/product/get-all`);
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiURL}/product/get/${id}`);
  }
}
