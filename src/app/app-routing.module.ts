import { RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {BooksComponent} from "./books/books.component";
import {GenresComponent} from "./genres/genres.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'genres', component: GenresComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
