import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UploadFile } from '../uploaded-item/interfaces/upload-file';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @Output() files: EventEmitter<UploadFile[]> = new EventEmitter();
  @Output() dragFileEmit: EventEmitter<boolean> = new EventEmitter();
  @HostBinding('style.background') private background = 'transparent';
  @HostBinding('style.border') private border = '1px dashed #eaeef9';

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#F1F6FE';
    this.border = '1px dashed #1157c8';
    this.dragFileEmit.emit(true);
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent';
    this.border = '1px dashed #eaeef9';
    this.dragFileEmit.emit(false);
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent';
    this.border = '1px dashed #eaeef9';
    this.dragFileEmit.emit(false);

    let files: UploadFile[] = [];
    if (evt.dataTransfer != null) {
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        const file = evt.dataTransfer.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        );
        files.push({ file: file, safeUrl: url, uploadPercent: 52 });
      }
      if (files.length > 0) {
        this.files.emit(files);
      }
    }
  }
}
