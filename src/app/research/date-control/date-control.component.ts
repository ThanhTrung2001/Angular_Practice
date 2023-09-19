import { Component, Input } from '@angular/core';
import { DateInformation } from './interfaces/date-info';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss'],
})
export class DateControlComponent {
  currentDate: Date = new Date();
  startDate: Date = new Date();
  activeDate: Date = new Date();
  @Input({}) clickCalendarDate: Date = new Date();
  dateList: DateInformation[] = [
    { weekDay: 'Mon', date: new Date() },
    { weekDay: 'Tue', date: new Date() },
    { weekDay: 'Wed', date: new Date() },
    { weekDay: 'Thu', date: new Date() },
    { weekDay: 'Fri', date: new Date() },
    { weekDay: 'Sat', date: new Date() },
    { weekDay: 'Sun', date: new Date() },
  ];

  constructor() {
    this.getWeekFromDayOfWeek();
  }

  getWeekFromDayOfWeek() {
    let dateNumber = this.getDayInWeek();
    this.startDate.setDate(this.currentDate.getDate() - dateNumber);
    for (let i = 0; i < 7; i++) {
      this.dateList[i].date.setDate(this.startDate.getDate() + i);
    }
  }

  getDayInWeek() {
    //Monday 1, Sunday 0
    return this.currentDate.getDay() === 0 ? 6 : this.currentDate.getDay() - 1;
  }

  clickDate(day: Date) {
    this.activeDate = new Date(day);
  }

  nextWeek() {
    this.dateList.forEach((element) => {
      element.date.setDate(element.date.getDate() + 7);
    });
    console.log(this.activeDate);
  }
  previousWeek() {
    this.dateList.forEach((element) => {
      element.date.setDate(element.date.getDate() - 7);
    });
  }
}
