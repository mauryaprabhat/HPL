import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamPlayerAmountDetailService {

  PLAYER_TEAM_BIDAMOUNT_DETAIL_URL = 'http://localhost:50199/api/AuctionDetails';
  TEAM_REMAININGAMOUNT_URL = '';

  constructor(private _httpClient: HttpClient ) { }

  getAllTeamPlayerDetail(): Observable<any[]> {
    return this._httpClient.get<any>(this.PLAYER_TEAM_BIDAMOUNT_DETAIL_URL);
  }

  getAllTeamWithRemainingAmount(): Observable<any[]> {
    return this._httpClient.get<any>(this.TEAM_REMAININGAMOUNT_URL);
  }

}
