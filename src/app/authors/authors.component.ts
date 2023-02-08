import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../shared/services/author.service";
import {Author} from "../models/author.model";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{
  isFeatching = false;
  authors: Author[] = [];
  error = null;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.isFeatching = true;
    this.authorService.getAllAuthors().subscribe(authors => {
      this.isFeatching = false;
      this.authors = authors;
      console.log(authors);
    }, error => {
      this.isFeatching = false;
      this.error = error.message;
    })
  }
}
