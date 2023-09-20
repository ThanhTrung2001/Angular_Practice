import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research.component';
import { BarRatingComponent } from './bar-rating/bar-rating.component';
import { BigCalendarComponent } from './big-calendar/big-calendar.component';
import { DateControlComponent } from './date-control/date-control.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogComponent } from './dialog/dialog.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ToastComponent } from './toast/toast.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ViewPracticeComponent } from './view-practice/view-practice.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: ResearchComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'bar-rating', component: BarRatingComponent },
      { path: 'big-calendar', component: BigCalendarComponent },
      { path: 'date-control', component: DateControlComponent },
      { path: 'date-picker', component: DatePickerComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'navigation-bar', component: NavigationBarComponent },
      { path: 'snackbar', component: ToastComponent },
      { path: 'upload-file', component: UploadFileComponent },
      { path: 'view', component: ViewPracticeComponent },
      { path: 'input', component: InputComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule {}
