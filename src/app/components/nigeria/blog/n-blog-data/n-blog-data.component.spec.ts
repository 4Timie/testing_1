import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBlogDataComponent } from './n-blog-data.component';

describe('NBlogDataComponent', () => {
  let component: NBlogDataComponent;
  let fixture: ComponentFixture<NBlogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NBlogDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NBlogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
