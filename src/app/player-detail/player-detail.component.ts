import { Component, OnInit } from '@angular/core';
import { PlayerDetailService } from '../services/player-detail.service';
import { Playerdetail } from '../model/playerdetail';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor( private _playerDetailService: PlayerDetailService ) { }
  SERVER_IMAGE_PATH = '../../assets/UploadedImages/';
  data: Playerdetail;
  imagePath: string;
  imagesource: any;
  playerFullName: any;

  ngOnInit() {

  this._playerDetailService.getPlayerDetail().subscribe(
    res => {this.data = res;
      const image  = this.data[0].ImageUrl;
      const playerImageUrl = image.replace(/^.*[\\\/]/, '');
      this.imagePath = this.SERVER_IMAGE_PATH + playerImageUrl;
      this.data.ImageUrl = this.imagePath;
      console.log('this is image path fromdata base-', this.data.ImageUrl);
      console.log(this.data.Description);
    },
    (error) => console.log('Error', error),
    () => console.log('completed!')
  );
  }

}
