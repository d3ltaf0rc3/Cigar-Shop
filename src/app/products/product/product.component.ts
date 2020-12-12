import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: IProduct;

  get isLogged(): boolean {
    return !!this.authService.user;
  }

  get isInCart(): boolean {
    return !!this.authService.user.cart.find((el: IProduct) => el._id === this.product._id);
  }

  get isInWishlist(): boolean {
    return !!this.authService.user.wishlist.find((el: IProduct) => el._id === this.product._id);
  }

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    });
  }

  addToCartHandler(): void {
    this.productService.addToCart(this.product._id).pipe(
      tap((user: IUser) => this.authService.updateUser(user))
    ).subscribe();
  }

  addToWishlistHandler(): void {
    this.productService.addToWishlist(this.product._id).pipe(
      tap((user: IUser) => this.authService.updateUser(user))
    ).subscribe();
  }

  removeFromCartHandler(): void {
    this.productService.removeFromCart(this.product._id).pipe(
      tap((user: IUser) => this.authService.updateUser(user))
    ).subscribe();
  }

  removeFromWishlistHandler(): void {
    this.productService.removeFromWishlist(this.product._id).pipe(
      tap((user: IUser) => this.authService.updateUser(user))
    ).subscribe();
  }
}
