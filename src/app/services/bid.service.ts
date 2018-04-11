import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BidService {

  constructor( private _httpClient: HttpClient) { }

  AUCTION_DETAIL_URL = 'http://localhost:50199/api/AuctionDetails';
  UPDATE_STATUS_URL = 'http://localhost:50199/api/PlayerDetails/';

  saveBid(Bid: any ): Observable<any> {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._httpClient.post(this.AUCTION_DETAIL_URL, Bid , { headers });
  }

  updateStatus(employeeId: number): Observable<any> {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._httpClient.put(this.UPDATE_STATUS_URL + employeeId , { headers });
  }

}
