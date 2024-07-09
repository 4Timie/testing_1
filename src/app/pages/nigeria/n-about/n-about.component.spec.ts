import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAboutComponent } from './n-about.component';

describe('NAboutComponent', () => {
  let component: NAboutComponent;
  let fixture: ComponentFixture<NAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
