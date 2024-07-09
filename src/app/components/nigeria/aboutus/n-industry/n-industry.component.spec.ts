import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NIndustryComponent } from './n-industry.component';

describe('NIndustryComponent', () => {
  let component: NIndustryComponent;
  let fixture: ComponentFixture<NIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NIndustryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
