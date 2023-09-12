import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-rating',
  templateUrl: './bar-rating.component.html',
  styleUrls: ['./bar-rating.component.scss'],
})
export class BarRatingComponent {
  rate: number = 3;
}
