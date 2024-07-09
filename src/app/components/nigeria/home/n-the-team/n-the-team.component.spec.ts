import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTheTeamComponent } from './n-the-team.component';

describe('NTheTeamComponent', () => {
  let component: NTheTeamComponent;
  let fixture: ComponentFixture<NTheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NTheTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NTheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
