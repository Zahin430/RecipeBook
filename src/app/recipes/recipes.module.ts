import { RecipesRoutingModule } from './recipes-routing.module';
import { DropdownDirective } from './../shared/dropdown.directive';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
declarations: [
  RecipesComponent,
  RecipeStartComponent,
  RecipeListComponent,
  RecipeEditComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {

}
