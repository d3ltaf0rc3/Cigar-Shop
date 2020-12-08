import { Component, Input } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() post: IBlog;
  constructor() { }
}
