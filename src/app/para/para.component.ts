import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service'
@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.css']
})
export class ParaComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { }

  ngOnInit(): void {
    this.fruitsService.selectFruit.subscribe((fruit:string)=>{})
  }

}
