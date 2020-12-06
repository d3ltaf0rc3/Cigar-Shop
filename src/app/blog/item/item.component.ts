import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() post: IBlog;
  constructor() { }

  ngOnInit(): void {
  }

}
