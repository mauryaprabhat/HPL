import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerDetailService {

  url = 'http://localhost:50199/api/PlayerDetails';
  constructor(private _httpclient: HttpClient ) { }
  getPlayerDetail(): Observable<any> {
  //  const url = `${this.url}/${id}`;
    return  this._httpclient.get<any>(this.url);
  }
}
