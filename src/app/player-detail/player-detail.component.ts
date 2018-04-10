import { Component, OnInit } from '@angular/core';
import { PlayerDetailService } from '../services/player-detail.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor( private _playerDetailService: PlayerDetailService) { }

  data: any;
  imagesource: any;
  ngOnInit() {
  //  this.PlayerDetail();
  this._playerDetailService.getPlayerDetail().subscribe(
    res => this.data = res,
    (error) => console.log('Error', error),
    () => console.log('completed!')
  );
  }

  PlayerDetail() {
  }
}
