import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormPracticeComponent } from './features/forms/components/template-form-practice/template-form-practice.component';
import { ReactiveFormPracticeComponent } from './features/forms/components/reactive-form-practice/reactive-form-practice.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BarRatingComponent } from './research/bar-rating/bar-rating.component';
import { DateControlComponent } from './research/date-control/date-control.component';
import { DialogComponent } from './research/dialog/dialog.component';
import { ToastComponent } from './research/toast/toast.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [AppComponent, BarRatingComponent, DateControlComponent, DialogComponent, ToastComponent, ResearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
