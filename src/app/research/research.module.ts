import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BigCalendarComponent } from './big-calendar/big-calendar.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    DatePickerComponent,
    BigCalendarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResearchModule { }
