import { Component, OnDestroy, OnInit, importProvidersFrom } from '@angular/core';
import { Ingrediente} from '../shared/ingrediente.model'
import { ShoppinglistService } from './shopping-list.service';
import { Subject, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredientes : Ingrediente[];
  private igChangeSub:Subscription;

  constructor(private slService : ShoppinglistService) { }

  ngOnInit() {
    this.ingredientes = this.ingredientes=this.slService.getIngredients();
    this.igChangeSub  =  this.slService.ingredientsChanged
    .subscribe(
      (ingredientes:Ingrediente[]) => {
        this.ingredientes=this.ingredientes;
      }
    )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
      
  }

}
