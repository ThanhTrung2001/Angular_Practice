import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryViewComponent } from './masonry-view.component';

describe('MasonryViewComponent', () => {
  let component: MasonryViewComponent;
  let fixture: ComponentFixture<MasonryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryViewComponent]
    });
    fixture = TestBed.createComponent(MasonryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
