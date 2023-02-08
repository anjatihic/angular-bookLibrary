import { RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {BooksComponent} from "./books/books.component";
import {NgModule} from "@angular/core";
import {CreateNewComponent} from "./create-new/create-new.component";
import {AuthorsComponent} from "./authors/authors.component";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'new', component: CreateNewComponent},
  {path: 'authors', component: AuthorsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
