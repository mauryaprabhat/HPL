import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Playerdetail } from '../model/playerdetail';


@Injectable()
export class PlayerDetailService {
currentplayer: string;
  url = 'http://localhost:50199/api/PlayerDetails';
  constructor(private _httpclient: HttpClient ) { }
  getPlayerDetail(): Observable<Playerdetail> {
  //  const url = `${this.url}/${id}`;
    return  this._httpclient.get<Playerdetail>(this.url);
  }


  // ChangePlayerBidStatus(employeeID: number, player: Playerdetail ) {
  //     return this._httpclient.UpdateStatusPlayer(employeeID, player );
  // }
}
