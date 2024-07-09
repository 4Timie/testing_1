import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOurBlogComponent } from './n-our-blog.component';

describe('NOurBlogComponent', () => {
  let component: NOurBlogComponent;
  let fixture: ComponentFixture<NOurBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOurBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
