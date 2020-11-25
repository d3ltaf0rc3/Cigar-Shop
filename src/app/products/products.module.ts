import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoriesComponent } from './categories/categories.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductCardComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductComponent,
    ProductsComponent
  ]
})
export class ProductsModule { }
