import { Component, OnInit } from '@angular/core';
import { TeamPlayerDetailService } from '../services/team-player-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerDetailService } from '../services/player-detail.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BidService } from '../services/bid.service';
import { TeamPlayerAmountDetailService } from '../services/team-player-amount-detail.service';



@Component({
  selector: 'app-team-player-detail',
  templateUrl: './team-player-detail.component.html',
  styleUrls: ['./team-player-detail.component.css']
})
export class TeamPlayerDetailComponent implements OnInit {

  teamPlayerDetailResult: any;
  errorMsg = 'Error occured while getting data from service';
  public isTeamSelected = false;
  public playerTeam = '';
  name: any;
  employeeid: number;
  firstName: string;
  lastName: string;
  amount: number;
  forms: FormGroup;

  cskPlayers = [];
  rrPlayers = [];
  kpPlayers = [];
  ddPlayers = [];
  shPlayers = [];
  rcPlayers = [];
  kkrPlayers = [];
  miPlayers = [];

  constructor( private _teamPlayerDetailService: TeamPlayerDetailService,
    private _teamPlayerAmountDetailService: TeamPlayerAmountDetailService,
    private router: Router, private route: ActivatedRoute, private _bidService: BidService, private fb: FormBuilder ) {
      this.forms = fb.group({
        'amount' : this.amount
      });
     }

  ngOnInit() {
    // this._teamPlayerDetailService.getAllTeamPlayerDetail().subscribe(
    //   res => this.teamPlayerDetailResult = res,
    //   (error) => console.log(this.errorMsg),
    //   () => console.log('service call completed!')
    // );
    this._teamPlayerAmountDetailService.getAllTeamPlayerDetail().subscribe(
      res => {
        this.rrPlayers = res.filter( d => {
          if ( d.TeamName === 'Rajasthan Royals') {
            return d;
          }
        });
        this.cskPlayers = res.filter( d => {
          if ( d.TeamName === 'Chennai Super Kings') {
            return d;
          }
        });
        this.kpPlayers = res.filter( d => {
          if ( d.TeamName === 'Kings XI Punjab') {
            return d;
          }
        });
        this.ddPlayers = res.filter( d => {
          if ( d.TeamName === 'Delhi Daredevils') {
            return d;
          }
        });
        this.shPlayers = res.filter( d => {
          if ( d.TeamName === 'Sunrisers Hyderabad') {
            return d;
          }
        });
        this.kkrPlayers = res.filter( d => {
          if ( d.TeamName === 'Kolkata Knight Riders') {
            return d;
          }
        });
        this.miPlayers = res.filter( d => {
          if ( d.TeamName === 'Mumbai indians') {
            return d;
          }
        });

      }
        ,
      (error) => console.log(this.errorMsg),
      () => console.log('service call completed!')
    );

    this.route.params.subscribe( dat => {this.firstName = dat.firstName ; this.lastName = dat.lastName;
      this.employeeid = dat.employeeId; } );
  }
  selectedTeam(team: string) {
    this.isTeamSelected = true;
    this.playerTeam = team;
    console.log(team);
  }

  sold() {

    const  bid = {
      BidAmount: this.forms.get('amount').value,
      FirstName: this.firstName,
      LastName: this.lastName,
      TeamName: this.playerTeam
    };
    console.log(bid);
    if (this.playerTeam.length !== 0 && bid.BidAmount  >= 50000) {
    this._bidService.saveBid(bid).subscribe
      (
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
    );
  } else {
    alert('Select team and ensure Bid Amount is greater or equal to 50000');
  }
  }
  onSaveComplete() {
    console.log('i am in updateStatus');
    this._bidService.updateStatus(this.employeeid).subscribe(
      () => this.navigateToNext(),
      error => {
        console.log(error);
      }
    );
  }
  navigateToNext() {
    console.log('trying to navigate');
     this.router.navigate(['/teamPlayerAmoutDetail']);

  }

}
