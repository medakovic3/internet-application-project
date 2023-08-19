import { TestBed } from '@angular/core/testing';

import { RadioniceService } from './radionice.service';

describe('RadioniceService', () => {
  let service: RadioniceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioniceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
