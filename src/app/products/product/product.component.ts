import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';
import { tap } from 'rxjs/operators';
import { IBase } from 'src/app/shared/interfaces/base';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: IProduct;

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService,
    private route: ActivatedRoute) {
  }

  get isLogged(): boolean {
    return !!this.authService.user;
  }

  get isInCart(): boolean {
    return !!this.authService.user.cart.find((el: IProduct) => el._id === this.product._id);
  }

  get isInWishlist(): boolean {
    return !!this.authService.user.wishlist.find((el: IProduct) => el._id === this.product._id);
  }

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.product = res.data;
    });
  }

  addToCartHandler(): void {
    this.productService.addToCart(this.product._id).pipe(
      tap((res: IBase<IUser>) => this.authService.updateUser(res.data))
    ).subscribe();
  }

  addToWishlistHandler(): void {
    this.productService.addToWishlist(this.product._id).pipe(
      tap((res: IBase<IUser>) => this.authService.updateUser(res.data))
    ).subscribe();
  }

  removeFromCartHandler(): void {
    this.productService.removeFromCart(this.product._id).pipe(
      tap((res: IBase<IUser>) => this.authService.updateUser(res.data))
    ).subscribe();
  }

  removeFromWishlistHandler(): void {
    this.productService.removeFromWishlist(this.product._id).pipe(
      tap((res: IBase<IUser>) => this.authService.updateUser(res.data))
    ).subscribe();
  }
}
