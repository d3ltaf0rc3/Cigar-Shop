import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductCardComponent],
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
