import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeService } from "./recipes/recipe.service";
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipiDetailsComponent } from "./recipes/recipi-details/recipi-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRouter:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:':id',component:RecipiDetailsComponent},  
        {path:'new',component:RecipeEditComponent},
        {path:':id/edit',component:RecipeEditComponent}

    ]},
    {path:'shopping-listcomponent',component:ShoppingListComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(appRouter)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}