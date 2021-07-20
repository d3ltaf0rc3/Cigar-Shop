import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[];
  totalPrice = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getList('cart').subscribe(cart => {
      this.cartItems = cart;
    });
  }
}
