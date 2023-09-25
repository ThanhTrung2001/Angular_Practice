import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  isExpanded = false;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/calendar.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'calendar-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/calendar-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'certificates',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/certificates.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'people',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/people.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'profile',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/profile.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'bubble-question-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/bubble-question-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'notification-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/notification-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'search-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/search-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'health-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/health-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'edit-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/edit-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'message-question',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/message-question.svg'
      )
    );
  }
  title = 'RO-UNI';
  expandedNav() {
    this.isExpanded = true;
  }
  collapsedNav() {
    this.isExpanded = false;
  }
}
