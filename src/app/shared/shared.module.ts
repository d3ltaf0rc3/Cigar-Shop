import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LowerNavbarComponent } from './lower-navbar/lower-navbar.component';
import { TitleHeroSectionComponent } from './title-hero-section/title-hero-section.component';
import { BrandsSectionComponent } from './brands-section/brands-section.component';
import { ContactsSectionComponent } from './contacts-section/contacts-section.component';
import { HabanosAtHomeComponent } from './habanos-at-home/habanos-at-home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent,
    LowerNavbarComponent,
    TitleHeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent,
    LowerNavbarComponent,
    TitleHeroSectionComponent,
  ]
})
export class SharedModule { }
