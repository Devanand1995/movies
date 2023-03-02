import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/Models/movies';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() itemData:Movies|null=null;
}
