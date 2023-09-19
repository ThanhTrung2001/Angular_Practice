import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialog: Dialog) {}
  openPopupDialog() {
    this.dialog.open(PopupDialogComponent, {
      data: {
        title: 'title1',
      },
      minWidth: '450px',
    });
  }

  openSlideDialog() {}
}
