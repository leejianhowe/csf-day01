import { Component, Input, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service'
import { Fruit } from '../fruits.model'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private fruitsService:FruitsService) { }
  displayFruit: Fruit
  
  ngOnInit(): void {
    this.fruitsService.selectFruit.subscribe(( ele:Fruit)=>this.displayFruit=ele)
  }



}
