import { Component, OnInit } from '@angular/core';
import { TeamPlayerDetailService } from '../services/team-player-detail.service';


@Component({
  selector: 'app-team-player-detail',
  templateUrl: './team-player-detail.component.html',
  styleUrls: ['./team-player-detail.component.css']
})
export class TeamPlayerDetailComponent implements OnInit {

  teamPlayerDetailResult: any;
  errorMsg = 'Error occured while getting data from service';
  constructor( private _teamPlayerDetailService: TeamPlayerDetailService) { }

  ngOnInit() {
    this._teamPlayerDetailService.getAllTeamPlayerDetail().subscribe(
      res => this.teamPlayerDetailResult = res,
      (error) => console.log(this.errorMsg),
      () => console.log('service call completed!')
    );
  }

}
