import { Ingedient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingedients: Ingedient[] = [
    new Ingedient('Apples', 5),
    new Ingedient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
