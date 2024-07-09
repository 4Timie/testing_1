import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GIndustryComponent } from './g-industry.component';

describe('GIndustryComponent', () => {
  let component: GIndustryComponent;
  let fixture: ComponentFixture<GIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GIndustryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
