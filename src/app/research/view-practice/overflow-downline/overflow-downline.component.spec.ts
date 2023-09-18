import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowDownlineComponent } from './overflow-downline.component';

describe('OverflowDownlineComponent', () => {
  let component: OverflowDownlineComponent;
  let fixture: ComponentFixture<OverflowDownlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverflowDownlineComponent]
    });
    fixture = TestBed.createComponent(OverflowDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
