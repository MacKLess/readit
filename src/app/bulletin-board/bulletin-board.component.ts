import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})
export class BulletinBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class BulletinBoardComponent {
  categories: Category[] = [
    new Category('YA'),
    new Category('Mystery/Thriller'),
    new Category('Sci Fi'),
    new Category('Nonfiction'),
    new Category('Fiction')
  ]
}
