import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd]},
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGaurd
  ]
})
export class RecipesRoutingModule {

}
