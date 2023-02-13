import { RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {BooksComponent} from "./books/books.component";
import {NgModule} from "@angular/core";
import {CreateNewComponent} from "./create-new/create-new.component";
import {AuthorsComponent} from "./authors/authors.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {LoansComponent} from "./loans/loans.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {NewAuthorComponent} from "./create-new/new-author/new-author.component";
import {NewBookComponent} from "./create-new/new-book/new-book.component";
import {StartPageComponent} from "./create-new/start-page/start-page.component";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'books/:id/:authorId', component: BookDetailComponent},
  {path: 'new', component: CreateNewComponent, children: [
      {path: '', component: StartPageComponent},
      {path: 'author', component: NewAuthorComponent},
      {path: 'book', component: NewBookComponent}
    ]},
  {path: 'authors', component: AuthorsComponent},
  {path: 'myLoans', component: LoansComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
