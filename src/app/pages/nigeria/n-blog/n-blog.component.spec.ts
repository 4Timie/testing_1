import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBlogComponent } from './n-blog.component';

describe('NBlogComponent', () => {
  let component: NBlogComponent;
  let fixture: ComponentFixture<NBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
