import { Component } from '@angular/core';
import { DateInformation } from './interfaces/date-info';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss'],
})
export class DateControlComponent {
  dateList: DateInformation[] = [
    { weekDay: 'Mon', date: new Date(), sessions: [] },
    { weekDay: 'Tue', date: new Date(), sessions: [] },
  ];
  constructor() {
    const date = new Date();
    console.log(date);
    date.setDate(date.getDate() + 1);
    console.log(date);
  }
}
