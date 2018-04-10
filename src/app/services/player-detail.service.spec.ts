import { TestBed, inject } from '@angular/core/testing';

import { PlayerDetailService } from './player-detail.service';

describe('PlayerDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerDetailService]
    });
  });

  it('should be created', inject([PlayerDetailService], (service: PlayerDetailService) => {
    expect(service).toBeTruthy();
  }));
});
