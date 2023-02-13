import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksComponent } from './books/books.component';
import { LoansComponent } from './loans/loans.component';
import {AppRoutingModule} from "./app-routing.module";
import { WelcomeBannerComponent } from './home-page/welcome-banner/welcome-banner.component';
import { FeaturesComponent } from './home-page/features/features.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateNewComponent } from './create-new/create-new.component';
import { NewAuthorComponent } from './create-new/new-author/new-author.component';
import { NewBookComponent } from './create-new/new-book/new-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ShortenTextPipe } from './books/shorten-text.pipe';
import { StartPageComponent } from './create-new/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomePageComponent,
    BooksComponent,
    LoansComponent,
    WelcomeBannerComponent,
    FeaturesComponent,
    CreateNewComponent,
    NewAuthorComponent,
    NewBookComponent,
    AuthorsComponent,
    BookDetailComponent,
    LoaderComponent,
    RegisterComponent,
    LoginComponent,
    ShortenTextPipe,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
