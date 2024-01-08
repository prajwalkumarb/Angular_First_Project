import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipi-item',
  templateUrl: './recipi-item.component.html',
  styleUrls: ['./recipi-item.component.css']
})
export class RecipiItemComponent implements OnInit {
  @Input() recipe:Recipe; 


  onSelected(){
  }
  ngOnInit(): void {
  }

}
