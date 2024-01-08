import { EventEmitter } from "@angular/core";
import { Ingrediente } from "../shared/ingrediente.model";
import { Subject } from "rxjs";

export class ShoppinglistService{
    ingredientsChanged = new Subject<Ingrediente[]>();
    private ingredientes : Ingrediente[] =[
        new Ingrediente('Apple',10),
        new Ingrediente('Grapes',20), 
    ];

    getIngredients(){
        return this.ingredientes.slice();
    }

    addIngredient(ingrediente:Ingrediente){
        this.ingredientes.push(ingrediente);
        this.ingredientsChanged.next(this.ingredientes.slice());
    }

    addIngredients(ingredientes:Ingrediente[]){
        this.ingredientes.push(...ingredientes);
        this.ingredientsChanged.next(this.ingredientes.slice())
    }
}


