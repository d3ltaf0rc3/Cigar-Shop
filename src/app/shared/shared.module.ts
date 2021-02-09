import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LowerNavbarComponent } from './lower-navbar/lower-navbar.component';
import { TitleHeroSectionComponent } from './title-hero-section/title-hero-section.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorBoxComponent } from './error-box/error-box.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    LowerNavbarComponent,
    TitleHeroSectionComponent,
    LoaderComponent,
    ErrorBoxComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LowerNavbarComponent,
    TitleHeroSectionComponent,
    LoaderComponent,
    ErrorBoxComponent,
    WrapperComponent
  ]
})
export class SharedModule { }
