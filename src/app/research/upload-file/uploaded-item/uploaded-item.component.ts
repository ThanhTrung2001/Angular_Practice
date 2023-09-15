import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadFile } from './interfaces/upload-file';

@Component({
  selector: 'app-uploaded-item',
  templateUrl: './uploaded-item.component.html',
  styleUrls: ['./uploaded-item.component.scss'],
})
export class UploadedItemComponent {
  @Input({}) name: string = '';
  @Input({}) size: number = 0;
  @Input({}) percent: number = 0;
  // @Output() deleteEvent: EventEmitter<string> = new E;
  constructor() {
    this.name = 'your-file-here.PDF';
    this.size = 12;
    this.percent = 52;
  }

  // deleteUploadedFile() {
  //   this.deleteEvent.emit();
  // }

  formatBytes(bytes: number, decimals: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
