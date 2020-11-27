import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  exports: [
    ProfileComponent,
    SettingsComponent,
    WishlistComponent,
    CartComponent
  ]
})
export class UserModule { }
