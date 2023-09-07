import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormPracticeComponent } from './components/template-form-practice/template-form-practice.component';
import { ReactiveFormPracticeComponent } from './components/reactive-form-practice/reactive-form-practice.component';
import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  declarations: [
    TemplateFormPracticeComponent,
    ReactiveFormPracticeComponent,
    FormsComponent,
  ],
  imports: [CommonModule, RouterModule, FormsRoutingModule],
  exports: [FormsComponent],
})
export class FormsModule {}
