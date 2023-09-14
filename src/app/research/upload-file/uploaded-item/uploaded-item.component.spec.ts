import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedItemComponent } from './uploaded-item.component';

describe('UploadedItemComponent', () => {
  let component: UploadedItemComponent;
  let fixture: ComponentFixture<UploadedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadedItemComponent]
    });
    fixture = TestBed.createComponent(UploadedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
