import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css']
})
export class ItemsBannerComponent {
  
  @Input() item:Movies[]=[];
  @Input() title:string='';
  

}
