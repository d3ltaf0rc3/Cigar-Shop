import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LowerNavbarComponent } from './lower-navbar/lower-navbar.component';
import { BrandsSectionComponent } from './brands-section/brands-section.component';
import { HabanosAtHomeComponent } from './habanos-at-home/habanos-at-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    LowerNavbarComponent,
    BrandsSectionComponent,
    HabanosAtHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
