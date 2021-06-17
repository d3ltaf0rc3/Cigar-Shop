import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBlog } from 'src/app/shared/interfaces/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  posts: IBlog[];
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getAll()
    .pipe(
      catchError(() => {
        this.router.navigate(['not-found']);
        return throwError(() => new Error('Something went wrong! Try again later.'));
      })
    )
    .subscribe(resp => {
      this.posts = resp.data;
    });
  }
}
