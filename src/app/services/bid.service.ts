import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BidService {

  constructor( private _httpClient: HttpClient) { }

  URL = '';
  saveBid(Bid: any ): Observable<any> {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._httpClient.post(this.URL, Bid , { headers });
  }

}
