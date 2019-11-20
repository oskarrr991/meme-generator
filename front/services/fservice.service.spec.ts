import { TestBed } from '@angular/core/testing';

import { FserviceService } from './fservice.service';

describe('FserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FserviceService = TestBed.get(FserviceService);
    expect(service).toBeTruthy();
  });
});
