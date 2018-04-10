import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TeamPlayerDetailService {

  URL = '';
  constructor(private _httpClient: HttpClient) { }

  getAllTeamPlayerDetail(): Observable<any[]> {
    return this._httpClient.get<any>(this.URL);
  }

}
