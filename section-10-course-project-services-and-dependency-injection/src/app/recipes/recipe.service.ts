import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    // If return recipes without slice, it's passing a reference type
    // meaning any alterations made my another component will affect the array
    // in this service. Slice provides a copy of the array
    return this.recipes.slice();
  }
}