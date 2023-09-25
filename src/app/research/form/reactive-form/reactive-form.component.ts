import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AsyncCheckvalidator } from './validator.ts/asyncValidator';

export function customValidationRetypepassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password')?.value;
    let retype = control.get('retypepassword')?.value;
    if (password !== retype) {
      return { retypeNotTheSame: true };
    }
    return null;
  };
}

export function customTest(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password1 = control?.value;
    if (password1 != '') {
      return null;
    }
    return { empty: true };
  };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  //TODO: FormBuilder type
  // userForm = this.fb.group({
  //   name: ['', Validators.required, this.validateCustom.validate],
  //   password: ['', [Validators.required, Validators.minLength(8)]],
  //   retypepassword: ['', [Validators.required, Validators.minLength(8)]],
  // });
  userForm = new FormGroup(
    {
      name: new FormControl(
        '',
        Validators.required,
        this.validateCustom.validate
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      retypepassword: new FormControl('', customTest),
    },
    [customValidationRetypepassword.bind(this)]
  );
  constructor(
    private fb: FormBuilder,
    private validateCustom: AsyncCheckvalidator
  ) {}
  ngOnInit(): void {
    this.userForm.setValidators(customValidationRetypepassword);
    this.userForm.updateValueAndValidity();
  }

  submitForm() {
    console.log(customValidationRetypepassword);
  }
}
