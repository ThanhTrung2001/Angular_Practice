import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.scss'],
})
export class ReactiveForm2Component implements OnInit {
  userForm = new FormGroup({
    // name: new FormControl(''),
    name: new FormControl('initial value', { nonNullable: true }),
    password: new FormControl<number | string>(''),
  });
  ngOnInit(): void {}
  submitForm() {}
  resetValue() {
    this.userForm.get('name')?.reset();
    console.log(this.userForm.get('name')?.value);
  }

  setValue() {
    this.userForm.get('name')?.setValue('setValue');
    console.log(this.userForm.get('name')?.value);
  }

  setValueForUserName() {
    this.userForm.patchValue({ name: 'hello' });
  }

  setEmpty() {
    this.userForm.get('name')?.setValue('');
    console.log(this.userForm.get('name')?.value);
  }
}
