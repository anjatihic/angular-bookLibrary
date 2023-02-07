import { Component } from '@angular/core';
import {Author} from "../../models/author.model";
import {AuthorService} from "../../shared/services/author.service";

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent {

  constructor(private authorService: AuthorService) {
  }
  onCreateAuthor(authorData: Author){
    console.log('onCreateAuthor()')
    this.authorService.createAuthor(authorData.name, authorData.surname, authorData.yearBorn, authorData.yearDied);
    alert('Author is created');
  }
}
