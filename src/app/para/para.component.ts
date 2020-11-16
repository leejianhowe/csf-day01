import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service'
import {Fruit} from '../fruits.model'
@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.css']
})
export class ParaComponent implements OnInit {
  text: string 
  
  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.text = 'Whats your favourite Fruit?'
    this.fruitsService.selectFruit.subscribe((ele: Fruit) => { this.text = ele.desc })
  }

}
