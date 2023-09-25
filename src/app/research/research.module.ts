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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDirective } from './upload-file/directives/dragndrop.directive';
import { NotificationSnackBarComponent } from './toast/notification-snack-bar/notification-snack-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ViewPracticeComponent } from './view-practice/view-practice.component';
import { MasonryViewComponent } from './view-practice/masonry-view/masonry-view.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { GridViewComponent } from './view-practice/grid-view/grid-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { OverflowDownlineComponent } from './view-practice/overflow-downline/overflow-downline.component';
import { DialogModule } from '@angular/cdk/dialog';
import { SlideDialogComponent } from './dialog/slide-dialog/slide-dialog.component';
import { PopupDialogComponent } from './dialog/popup-dialog/popup-dialog.component';
import { InputComponent } from './input/input.component';
import { FormFieldComponent } from './input/form-field/form-field.component';
import { CustomFieldComponent } from './input/custom-field/custom-field.component';
import { DropDownComponent } from './input/drop-down/drop-down.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from './form/form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './form/reactive-form2/reactive-form2.component';
import { HeaderComponent } from './navigation-bar/header/header.component';
import { NavigationComponent } from './navigation-bar/navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';

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
    ViewPracticeComponent,
    MasonryViewComponent,
    GridViewComponent,
    OverflowDownlineComponent,
    SlideDialogComponent,
    PopupDialogComponent,
    InputComponent,
    FormFieldComponent,
    CustomFieldComponent,
    DropDownComponent,
    FormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ResearchRoutingModule,
    BarRatingModule,
    MatProgressBarModule,
    NgxFileDragDropModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    NgxMasonryModule,
    MatGridListModule,
    DialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
  ],
  exports: [ResearchComponent],
})
export class ResearchModule {}
