import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: IProduct;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    });
  }

  addToCartHandler(): void {
    this.productService.addToCart(this.product._id).subscribe();
  }

  addToWishlistHandler(): void {
    this.productService.addToWishlist(this.product._id).subscribe();
  }
}
