import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, debounceTime, delay, map, of } from 'rxjs';

export function validateUsername(name: string): Observable<boolean> {
  const registeredUser = ['123', '456', '789'];
  let isValid: boolean = true;
  registeredUser.forEach((x) => {
    if (x === name) {
      isValid = false;
    }
  });
  return of(isValid);
}

@Injectable({ providedIn: 'root' })
export class AsyncCheckvalidator implements AsyncValidator {
  constructor() {}
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    return validateUsername(control.value).pipe(
      delay(500),
      map((valid: boolean) => {
        return valid ? null : { userExistedInDatabase: true };
      })
    );
  }
}
