import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/shared/interfaces/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: IBlog;
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getPost(this.route.snapshot.paramMap.get('id')).subscribe(post => {
      this.post = post;
    });
  }
}
