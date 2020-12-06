import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../shared/interfaces/blog';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${environment.apiURL}/blog/get-all`);
  }

  getPost(id: string): Observable<IBlog> {
    return this.http.get<IBlog>(`${environment.apiURL}/blog/get/${id}`);
  }
}
