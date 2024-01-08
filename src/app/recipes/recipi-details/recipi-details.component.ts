import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipi-details',
  templateUrl: './recipi-details.component.html',
  styleUrls: ['./recipi-details.component.css']
})
export class RecipiDetailsComponent implements OnInit {
  recipe:Recipe;
  id :number;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { 
  }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredienceToShoppingList(this.recipe.ingredientes)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
    // this.router.navigate(['../',this.id, 'edit'],{relativeTo:this.route})
  }
}
