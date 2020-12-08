import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: IProduct;
  constructor() { }
}
