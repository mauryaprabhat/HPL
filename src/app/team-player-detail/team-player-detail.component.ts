import { Component, OnInit } from '@angular/core';
import { TeamPlayerDetailService } from '../services/team-player-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerDetailService } from '../services/player-detail.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BidService } from '../services/bid.service';



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
  constructor( private _teamPlayerDetailService: TeamPlayerDetailService,
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

    //   this.name = this.route.snapshot.queryParams['name'];
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
    this._bidService.saveBid(bid).subscribe
      (
        () => this.onSaveComplete(),
        (error: any) => console.log(error)
    );
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
