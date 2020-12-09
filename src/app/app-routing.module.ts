import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products/products.component';
import { CartComponent } from './user/cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'cigars', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
