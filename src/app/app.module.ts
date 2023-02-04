import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksComponent } from './books/books.component';
import { LoansComponent } from './loans/loans.component';
import { GenresComponent } from './genres/genres.component';
import {AppRoutingModule} from "./app-routing.module";
import { WelcomeBannerComponent } from './home-page/welcome-banner/welcome-banner.component';
import { FeaturesComponent } from './home-page/features/features.component';
import { BookComponent } from './books/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomePageComponent,
    BooksComponent,
    LoansComponent,
    GenresComponent,
    WelcomeBannerComponent,
    FeaturesComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
