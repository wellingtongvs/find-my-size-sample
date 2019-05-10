import { TestBed } from '@angular/core/testing';

import { FindSizeService } from './find-size.service';

describe('FindSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindSizeService = TestBed.get(FindSizeService);
    expect(service).toBeTruthy();
  });
});
