import { TestBed, inject } from '@angular/core/testing';

import { TeamPlayerDetailService } from './team-player-detail.service';

describe('TeamPlayerDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamPlayerDetailService]
    });
  });

  it('should be created', inject([TeamPlayerDetailService], (service: TeamPlayerDetailService) => {
    expect(service).toBeTruthy();
  }));
});
