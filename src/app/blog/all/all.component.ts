import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  posts: IBlog[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
}
