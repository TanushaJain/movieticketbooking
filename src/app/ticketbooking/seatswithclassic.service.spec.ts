import { TestBed } from '@angular/core/testing';

import { SeatswithclassicService } from './seatswithclassic.service';

describe('SeatswithclassicService', () => {
  let service: SeatswithclassicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatswithclassicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
