import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBlogDataComponent } from './g-blog-data.component';

describe('GBlogDataComponent', () => {
  let component: GBlogDataComponent;
  let fixture: ComponentFixture<GBlogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GBlogDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GBlogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
