import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsSectionComponent } from './brands-section/brands-section.component';
import { ContactsSectionComponent } from './contacts-section/contacts-section.component';
import { HabanosAtHomeComponent } from './habanos-at-home/habanos-at-home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent
  ]
})
export class CoreModule { }
