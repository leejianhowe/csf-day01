import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  items:string[]
  constructor(private fruitsServices:FruitsService) { }

  ngOnInit(): void {
    this.items = this.fruitsServices.getFruits()
  }

  displayFruit(fruit: string) {
    this.fruitsServices.selectFruit.emit(fruit)

  }

}
