import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import {Fruit} from '../fruits.model'
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  items:Fruit[]
  constructor(private fruitsServices:FruitsService) { }

  ngOnInit(): void {
    this.items = this.fruitsServices.getFruits()
  }

  displayFruit(i:Fruit) {
    this.fruitsServices.selectFruit.emit(i)

  }

}
