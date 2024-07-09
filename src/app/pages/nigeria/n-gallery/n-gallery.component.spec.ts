import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGalleryComponent } from './n-gallery.component';

describe('NGalleryComponent', () => {
  let component: NGalleryComponent;
  let fixture: ComponentFixture<NGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
