import { TestBed } from '@angular/core/testing';

import { CinemasdataService } from './cinemasdata.service';

describe('CinemasdataService', () => {
  let service: CinemasdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemasdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
