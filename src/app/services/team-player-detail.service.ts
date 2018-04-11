import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TeamPlayerDetailService {

 // PLAYER_TEAM_REMAINING_DETAIL_URL = 'http://localhost:50199/api/AuctionDetails';
  constructor(private _httpClient: HttpClient) { }

  // getAllTeamPlayerDetail(): Observable<any[]> {
  //   return this._httpClient.get<any>(this.PLAYER_TEAM_REMAINING_DETAIL_URL);
  // }

}
