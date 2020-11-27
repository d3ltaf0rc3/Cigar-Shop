import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrandsSectionComponent } from './home/brands-section/brands-section.component';
import { ContactsSectionComponent } from './home/contacts-section/contacts-section.component';
import { HabanosAtHomeComponent } from './home/habanos-at-home/habanos-at-home.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
