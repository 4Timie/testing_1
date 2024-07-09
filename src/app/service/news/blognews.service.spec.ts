import { TestBed } from '@angular/core/testing';

import { BlognewsService } from './blognews.service';

describe('BlognewsService', () => {
  let service: BlognewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlognewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
