import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAboutTheTeamComponent } from './g-about-the-team.component';

describe('GAboutTheTeamComponent', () => {
  let component: GAboutTheTeamComponent;
  let fixture: ComponentFixture<GAboutTheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GAboutTheTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GAboutTheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
