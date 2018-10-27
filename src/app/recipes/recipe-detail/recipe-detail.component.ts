import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // Taking the input detail for the recipe
  // Importing class is the Recipe from the Recipe.model.ts
  recipe: Recipe;
  id: number;

  // The constructor of this class allows to use the service in this class
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }


}
