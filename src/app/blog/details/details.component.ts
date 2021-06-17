import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBlog } from 'src/app/shared/interfaces/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: IBlog;
  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getPost(this.route.snapshot.paramMap.get('id'))
      .pipe(
        catchError((err) => {
          this.router.navigate(['/not-found']);
          if (err.status === 404) {
            return throwError(() => new Error('Blog post not found!'));
          }
          return throwError(() => new Error('Something went wrong! Try again later.'));
        })
      )
      .subscribe(resp => {
        this.post = resp.data;
      });
  }
}
