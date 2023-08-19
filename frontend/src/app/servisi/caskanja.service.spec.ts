import { TestBed } from '@angular/core/testing';

import { CaskanjaService } from './caskanja.service';

describe('CaskanjaService', () => {
  let service: CaskanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaskanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
