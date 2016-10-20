import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'nl-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe("Dummy", "Dummy", "http://thumbs.ebaystatic.com/images/m/mfXELL6zPWJE4OC0agiXMZw/s-l225.jpg");

  constructor() { }

  ngOnInit() {
  }

}
