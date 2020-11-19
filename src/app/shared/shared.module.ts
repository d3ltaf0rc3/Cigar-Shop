import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LowerNavbarComponent } from './lower-navbar/lower-navbar.component';
import { TitleHeroSectionComponent } from './title-hero-section/title-hero-section.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LowerNavbarComponent,
    TitleHeroSectionComponent
  ],
  imports: [
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    LowerNavbarComponent,
    TitleHeroSectionComponent,
    SharedRoutingModule
  ]
})
export class SharedModule { }
