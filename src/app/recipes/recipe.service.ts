import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
  // Recipes array to hold recipes
  recipes: Recipe[] = [

    new Recipe('Pizza',
      'Donair Love',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [new Ingredient('Donair Sauce', 1),
       new Ingredient('Dough', 1)
      ]),
    new Recipe('Burger',
            'JUICY LUCY',
            // tslint:disable-next-line:max-line-length
      'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger.jpg',
      [
        new Ingredient('Patty', 1),
        new Ingredient('Bun', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
  return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}

