import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOurServicesComponent } from './g-our-services.component';

describe('GOurServicesComponent', () => {
  let component: GOurServicesComponent;
  let fixture: ComponentFixture<GOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GOurServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
