import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css']
})

export class BBComponent {

  constructor(private router: Router){}

  categories: Category[] = [
    new Category('YA', 1),
    new Category('Mystery/Thriller', 2),
    new Category('Sci Fi', 3),
    new Category('Nonfiction', 4),
    new Category('Fiction', 5)
  ];

  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  }

}
