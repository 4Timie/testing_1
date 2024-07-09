import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GGalleryComponent } from './g-gallery.component';

describe('GGalleryComponent', () => {
  let component: GGalleryComponent;
  let fixture: ComponentFixture<GGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
