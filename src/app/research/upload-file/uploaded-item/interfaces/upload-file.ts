import { SafeUrl } from '@angular/platform-browser';

export interface UploadFile {
  file: File;
  safeUrl: SafeUrl;
  uploadPercent: number;
}
