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
import { UploadedItemComponent } from './upload-file/uploaded-item/uploaded-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDirective } from './upload-file/directives/dragndrop.directive';
import { NotificationSnackBarComponent } from './toast/notification-snack-bar/notification-snack-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

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
    UploadedItemComponent,
    DragDirective,
    NotificationSnackBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ResearchRoutingModule,
    BarRatingModule,
    MatProgressBarModule,
    NgxFileDragDropModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports: [ResearchComponent],
})
export class ResearchModule {}
