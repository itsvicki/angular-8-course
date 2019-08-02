import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    for (let ingredient of this.recipe.ingredients) {
      let ingName = ingredient.name;
      let ingAmount = ingredient.amount;
      let newIngredient = new Ingredient(ingName, ingAmount);

      this.shoppingListService.addIngredient(newIngredient);
    }
  }
}
