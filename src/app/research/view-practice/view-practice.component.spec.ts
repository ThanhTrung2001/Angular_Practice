import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPracticeComponent } from './view-practice.component';

describe('ViewPracticeComponent', () => {
  let component: ViewPracticeComponent;
  let fixture: ComponentFixture<ViewPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPracticeComponent]
    });
    fixture = TestBed.createComponent(ViewPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
