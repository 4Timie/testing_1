import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFooterComponent } from './g-footer.component';

describe('GFooterComponent', () => {
  let component: GFooterComponent;
  let fixture: ComponentFixture<GFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
