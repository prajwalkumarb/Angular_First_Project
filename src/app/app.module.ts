import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipiDetailsComponent } from './recipes/recipi-details/recipi-details.component';
import { RecipiItemComponent } from './recipes/recipe-list/recipi-item/recipi-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipiDetailsComponent,
    RecipiItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
