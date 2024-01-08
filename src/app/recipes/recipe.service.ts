import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrediente } from "../shared/ingrediente.model";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{


    private recipes : Recipe[]=[
        new Recipe('FrenchFrice','Chilly','https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg',[
            new Ingrediente('meat',1),
            new Ingrediente('French Frice',20),
            new Ingrediente('buns',3),
            new Ingrediente('meat',2)
         ]),
        new Recipe('PaniPuri','Spicy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xmcaZkFinVERf4vyvEnffRcJOMKMroeWqA&usqp=CAU',[
            new Ingrediente('buns',3),
            new Ingrediente('meat',2),
            new Ingrediente('meat',1),
            new Ingrediente('French Frice',20), 
         ])
      ];


    constructor(private slService:ShoppinglistService){}
      
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredienceToShoppingList(ingredientes:Ingrediente[]){
        this.slService.addIngredients(ingredientes);
    }
}