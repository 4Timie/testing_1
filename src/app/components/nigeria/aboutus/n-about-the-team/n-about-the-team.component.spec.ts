import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAboutTheTeamComponent } from './n-about-the-team.component';

describe('NAboutTheTeamComponent', () => {
  let component: NAboutTheTeamComponent;
  let fixture: ComponentFixture<NAboutTheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NAboutTheTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NAboutTheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
