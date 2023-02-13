import { Component } from '@angular/core';
import {Author} from "../../models/author.model";
import {AuthorService} from "../../shared/services/author.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent {

  constructor(private authorService: AuthorService) {
  }
  onCreateAuthor(authorData: Author, authorForm: NgForm){
    console.log('onCreateAuthor()')
    this.authorService.createAuthor(authorData.name, authorData.surname, authorData.yearBorn, authorData.yearDied);
    alert('Author is created');
    authorForm.reset();
  }
}
