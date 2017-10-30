import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css']
})

export class BBComponent {
  categories: Category[] = [
    new Category('YA'),
    new Category('Mystery/Thriller'),
    new Category('Sci Fi'),
    new Category('Nonfiction'),
    new Category('Fiction')
  ];

}
