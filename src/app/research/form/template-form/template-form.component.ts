import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  user: User = { name: '', password: '' };
  // name: string = '';
  ngOnInit(): void {}
  submit(form: NgForm) {
    console.log(form.value.user);
  }
}
