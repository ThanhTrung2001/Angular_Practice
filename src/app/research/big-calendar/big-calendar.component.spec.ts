import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCalendarComponent } from './big-calendar.component';

describe('BigCalendarComponent', () => {
  let component: BigCalendarComponent;
  let fixture: ComponentFixture<BigCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCalendarComponent]
    });
    fixture = TestBed.createComponent(BigCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
