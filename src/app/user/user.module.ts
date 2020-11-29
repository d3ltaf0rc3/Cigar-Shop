import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    ProfileComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  exports: [
    ProfileComponent,
    WishlistComponent,
    CartComponent
  ]
})
export class UserModule { }
