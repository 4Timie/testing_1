import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOurBlogComponent } from './g-our-blog.component';

describe('GOurBlogComponent', () => {
  let component: GOurBlogComponent;
  let fixture: ComponentFixture<GOurBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GOurBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GOurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
