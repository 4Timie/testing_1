import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcontentComponent } from './blogcontent.component';

describe('BlogcontentComponent', () => {
  let component: BlogcontentComponent;
  let fixture: ComponentFixture<BlogcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
