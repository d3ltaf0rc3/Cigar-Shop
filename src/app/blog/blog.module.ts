import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [AllComponent, DetailsComponent, ItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
