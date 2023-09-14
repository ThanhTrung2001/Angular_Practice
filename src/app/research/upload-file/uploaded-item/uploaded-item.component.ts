import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadFile } from './interfaces/upload-file';

@Component({
  selector: 'app-uploaded-item',
  templateUrl: './uploaded-item.component.html',
  styleUrls: ['./uploaded-item.component.scss'],
})
export class UploadedItemComponent {
  @Input({}) name: string = '';
  @Input({}) size?: number = 0;
  @Input({}) percent: number = 0;
  @Output() deleteEvent = new EventEmitter<string>();
  constructor() {
    // this.file = {
    //   name: 'your-file-here.PDF',
    //   size: 12,
    // };
    this.name = 'your-file-here.PDF';
    this.size = 12;
    this.percent = 52;
  }

  deleteUploadedFile() {
    this.deleteEvent.emit();
  }
}
