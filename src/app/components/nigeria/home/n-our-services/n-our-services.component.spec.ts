import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOurServicesComponent } from './n-our-services.component';

describe('NOurServicesComponent', () => {
  let component: NOurServicesComponent;
  let fixture: ComponentFixture<NOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOurServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
