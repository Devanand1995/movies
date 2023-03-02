import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
animations:[
  trigger(
    'faded',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')])
      
    ]
  )
]
})
export class SliderComponent implements OnInit {
  

  currentSlider:number=0;
  @Input() item:Movies[]=[];
  @Input() isBanner:boolean=false;
  ngOnInit(): void {
    if(!this.isBanner){
   setInterval(()=>{
    this.currentSlider=++this.currentSlider%this.item.length;
   },5000) }
  }
}
