import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[];
  totalPrice = 1500;
  constructor() { }

  ngOnInit(): void {
    // TODO: get products from DB
  }
}
