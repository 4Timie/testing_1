import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTheTeamComponent } from './g-the-team.component';

describe('GTheTeamComponent', () => {
  let component: GTheTeamComponent;
  let fixture: ComponentFixture<GTheTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GTheTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GTheTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
