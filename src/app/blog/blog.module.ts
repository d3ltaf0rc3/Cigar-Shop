import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [AllComponent, DetailsComponent, ItemComponent],
  providers: [
    BlogService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class BlogModule { }
