import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHomeComponent } from './n-home.component';

describe('NHomeComponent', () => {
  let component: NHomeComponent;
  let fixture: ComponentFixture<NHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
