import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationSnackBarComponent } from './notification-snack-bar/notification-snack-bar.component';

// must import BrowserAnimationModule before implements snackbar

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, icon: string, type: number) {
    this.snackBar.openFromComponent(NotificationSnackBarComponent, {
      data: {
        message: message,
        icon: icon,
        type: type,
        snackBar: this.snackBar,
      },
      panelClass: 'successful',
      verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right',
    });
  }
}

export enum SnackBarType {
  Success = 0,
  Error = 1,
  Fail = 2,
}
