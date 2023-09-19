import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { title: string },
    public dialogRef: DialogRef
  ) {}
  delete() {
    console.log('Delete!');
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
