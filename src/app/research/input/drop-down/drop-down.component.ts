import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @ViewChild('selector', { static: false }) selector?: MatSelect;

  onSelectionChange(value: any) {
    this.selector?.close();
  }
}
