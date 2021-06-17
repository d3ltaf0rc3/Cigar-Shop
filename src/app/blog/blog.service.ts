import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../shared/interfaces/blog';
import { IBase } from '../shared/interfaces/base';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<IBase<IBlog[]>> {
    return this.http.get<IBase<IBlog[]>>(`${environment.apiURL}/blog/get`);
  }

  getPost(id: string): Observable<IBase<IBlog>> {
    return this.http.get<IBase<IBlog>>(`${environment.apiURL}/blog/get/${id}`);
  }
}
