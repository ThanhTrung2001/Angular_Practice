import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { FileSystemEntryMetadata } from 'ngx-file-drop/lib/dom.types';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  isDragFile: boolean = false;
  public files: NgxFileDropEntry[] = [];
  uploadFile: File[] = [];
  constructor() {}
  public dropped(files: NgxFileDropEntry[]) {
    this.isDragFile = false;
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.uploadFile.push(file);
          console.log(this.uploadFile.length);
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    console.log(this.uploadFile.length);
  }

  public fileOver(event: any) {
    console.log(event);
    if (this.isDragFile === false) {
      this.isDragFile = true;
    }
    console.log(this.isDragFile);
  }

  public fileLeave(event: any) {
    console.log(event);
    if (this.isDragFile === true) {
      this.isDragFile = false;
    }

    console.log(this.isDragFile);
  }
}
