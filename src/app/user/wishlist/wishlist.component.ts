import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { IBase } from 'src/app/shared/interfaces/base';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: IProduct[];
  constructor(
    private userService: UserService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userService.getList('wishlist').subscribe(wishlist => {
      this.wishlistItems = wishlist;
    });
  }

  clearWishlistHandler(): void {
    this.userService.clearWishlist().pipe(
      tap((res: IBase<IUser>) => this.authService.updateUser(res.data)),
      tap(() => this.wishlistItems = [])
    ).subscribe();
  }
}
