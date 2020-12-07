import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: IProduct[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getWishlist().subscribe(wishlist => {
      this.wishlistItems = wishlist;
    });
  }
}
