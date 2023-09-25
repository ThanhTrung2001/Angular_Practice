import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          'max-width': '205px',
          'min-width': '205px',
          width: '205px',
        })
      ),
      state(
        'out',
        style({
          'max-width': '40px',
          'min-width': '40px',
          width: '40px',
        })
      ),
      transition('in <=> out', animate('300ms ease-in-out')),
    ]),
  ],
})
export class NavigationComponent {
  @Input({}) isExpanded = false;
  expandedNav() {
    this.isExpanded = true;
  }
  collapsedNav() {
    this.isExpanded = false;
  }
}
