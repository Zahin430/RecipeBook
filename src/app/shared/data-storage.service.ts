import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authservice: AuthService) {}

  // store the recipes in the database
  storeRecipes() {
    return this.http.put('https://ng-recipe-book-78ecb.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  // Retrive the recipes from the database
  getRecipes() {
    const token = this.authservice.getToken();
    this.http.get('https://ng-recipe-book-78ecb.firebaseio.com/recipes.json?auth=' + token).pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log();
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
