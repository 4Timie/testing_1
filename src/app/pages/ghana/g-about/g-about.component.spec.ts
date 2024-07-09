import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAboutComponent } from './g-about.component';

describe('GAboutComponent', () => {
  let component: GAboutComponent;
  let fixture: ComponentFixture<GAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
