import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BigCalendarComponent } from './big-calendar/big-calendar.component';
import { BarRatingComponent } from './bar-rating/bar-rating.component';
import { DateControlComponent } from './date-control/date-control.component';
import { DialogComponent } from './dialog/dialog.component';
import { ToastComponent } from './toast/toast.component';
import { RouterModule } from '@angular/router';
import { ResearchComponent } from './research.component';
import { ResearchRoutingModule } from './research-routing.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    ResearchComponent,
    NavigationBarComponent,
    DatePickerComponent,
    BigCalendarComponent,
    BarRatingComponent,
    DateControlComponent,
    DialogComponent,
    ToastComponent,
    UploadFileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ResearchRoutingModule,
    BarRatingModule,
    NgxFileDropModule,
  ],
  exports: [ResearchComponent],
})
export class ResearchModule {}
