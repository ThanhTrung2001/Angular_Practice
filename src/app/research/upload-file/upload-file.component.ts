import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileValidators } from 'ngx-file-drag-drop';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { UploadFile } from './uploaded-item/interfaces/upload-file';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  isDragFile: boolean = false;
  uploadFiles: UploadFile[];
  constructor(private sanitizer: DomSanitizer) {
    this.uploadFiles = [];
  }

  changeDragState(event: boolean) {
    this.isDragFile = event;
  }

  onFileDropped(eventData: UploadFile[]) {
    this.uploadFiles = eventData;
  }

  uploadHandler(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      );
      this.uploadFiles.push({ file: file, safeUrl: url, uploadPercent: 52 });
    }
  }

  deleteFile(eventData: File) {
    let index = this.uploadFiles.findIndex((x) => x.file === eventData);
    console.log(index);
    this.uploadFiles.splice(index, 1);
  }
}
