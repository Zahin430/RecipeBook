import { SharedModule } from './../shared/shared.module';
import { DropdownDirective } from './../shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGaurd } from '../auth/auth-gaurd.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  // Importing sharedModule because dropdown directive is used in shared module
  // AppRoutingModule as router links used in Approutes
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGaurd
  ]
})
export class CoreModule {

}
