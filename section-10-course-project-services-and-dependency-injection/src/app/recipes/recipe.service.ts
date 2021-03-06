import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { ThrowStmt } from "@angular/compiler";

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel - just awesome!', 
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Big Fat Burger', 
      'What else you need to say?', 
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // If return recipes without slice, it's passing a reference type
    // meaning any alterations made my another component will affect the array
    // in this service. Slice provides a copy of the array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}