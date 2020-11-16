import { Component, Input, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service'
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: string[]

  constructor(private fruitsService:FruitsService) { }
  displayFruit: string = this.fruitsService.randomFruit()
  
  ngOnInit(): void {
    this.images = this.fruitsService.getFruits()
    this.fruitsService.selectFruit.subscribe(( fruit: string)=>this.displayFruit=fruit)
  }



}
