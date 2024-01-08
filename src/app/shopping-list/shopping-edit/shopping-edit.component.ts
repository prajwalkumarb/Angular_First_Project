import { Component, ElementRef, EventEmitter, OnInit, ViewChild,Output } from '@angular/core';
import { Ingrediente } from 'src/app/shared/ingrediente.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef ;
  @ViewChild('AmountInput') AmountInputInputRef:ElementRef ;

  constructor(private slService : ShoppinglistService) { }

  ngOnInit(): void {
  
  }

  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.AmountInputInputRef.nativeElement.value;
    let newIngredient= new Ingrediente(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);

  }
}
