import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrandsSectionComponent } from './home/brands-section/brands-section.component';
import { ContactsSectionComponent } from './home/contacts-section/contacts-section.component';
import { HabanosAtHomeComponent } from './home/habanos-at-home/habanos-at-home.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { reducers } from './+store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BrandsSectionComponent,
    ContactsSectionComponent,
    HabanosAtHomeComponent,
    HeroSectionComponent,
    AboutUsComponent,
    BrandsComponent,
    ContactsComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
