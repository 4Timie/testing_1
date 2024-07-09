import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurObjectivesComponent } from './our-objectives.component';

describe('OurObjectivesComponent', () => {
  let component: OurObjectivesComponent;
  let fixture: ComponentFixture<OurObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurObjectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
