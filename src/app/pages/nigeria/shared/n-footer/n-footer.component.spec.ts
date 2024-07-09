import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFooterComponent } from './n-footer.component';

describe('NFooterComponent', () => {
  let component: NFooterComponent;
  let fixture: ComponentFixture<NFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
