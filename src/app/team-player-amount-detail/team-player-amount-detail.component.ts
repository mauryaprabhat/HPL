import { Component, OnInit } from '@angular/core';
import { TeamPlayerAmountDetailService } from '../services/team-player-amount-detail.service';


@Component({
  selector: 'app-team-player-amount-detail',
  templateUrl: './team-player-amount-detail.component.html',
  styleUrls: ['./team-player-amount-detail.component.css']
})
export class TeamPlayerAmountDetailComponent implements OnInit {

  constructor( private _teamPlayerAmountDetailService: TeamPlayerAmountDetailService) { }

  teamPlayerAmountDetailResults = [];
  cskPlayers = [];
  rrPlayers = [];
  kpPlayers = [];
  ddPlayers = [];
  shPlayers = [];
  rcPlayers = [];
  kkrPlayers = [];
  miPlayers = [];

  totalAmount = 1450000;

  cskSpent = 0;
  rrSpent = 0;
  kpSpent = 0;
  ddSpent = 0;
  shSpent = 0;
  rcSpent = 0;
  kkrSpent = 0;
  miSpent = 0;

  teamPlayerRemainingAmount = [];
  errorMsg = 'Error occured while getting data!';

  ngOnInit() {
     this._teamPlayerAmountDetailService.getAllTeamPlayerDetail().subscribe(
      res => {
        this.teamPlayerAmountDetailResults = res;
        this.rrPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Rajasthan Royals') {
            this.rrSpent += d.BidAmount;
            return d;
          }
        });
        this.cskPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Chennai Super Kings') {
            this.cskSpent += d.BidAmount;
            return d;
          }
        });
        this.kpPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Kings XI Punjab') {
            this.kpSpent += d.BidAmount;
            return d;
          }
        });
        this.ddPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Delhi Daredevils') {
            this.ddSpent += d.BidAmount;
            return d;
          }
        });
        this.shPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Sunrisers Hyderabad') {
            this.shSpent += d.BidAmount;
            return d;
          }
        });
        this.kkrPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Kolkata Knight Riders') {
            this.kkrSpent += d.BidAmount;
            return d;
          }
        });
        this.miPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Mumbai indians') {
            this.miSpent += d.BidAmount;
            return d;
          }
        });
        this.rcPlayers = this.teamPlayerAmountDetailResults.filter( d => {
          if ( d.TeamName === 'Royal Challengers') {
            this.miSpent += d.BidAmount;
            return d;
          }
        });

      }
        ,
      (error) => console.log(this.errorMsg),
      () => console.log('service call completed!')
    );
    // this._teamPlayerAmountDetailService.getAllTeamWithRemainingAmount().subscribe(
    //   res => this.teamPlayerRemainingAmount = res,
    //   (error) => console.log(this.errorMsg),
    //   () => console.log('service call completed!')
    // );
  }

}
