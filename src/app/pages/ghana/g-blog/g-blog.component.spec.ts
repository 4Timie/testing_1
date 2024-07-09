import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBlogComponent } from './g-blog.component';

describe('GBlogComponent', () => {
  let component: GBlogComponent;
  let fixture: ComponentFixture<GBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
