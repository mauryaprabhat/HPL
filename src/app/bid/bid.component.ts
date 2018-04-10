import { Component, OnInit } from '@angular/core';
import { BidService } from '../services/bid.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  errorMessage: string;
  bidForm: FormGroup;

  constructor( private _bidService: BidService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  //   this.bidForm = this.fb.group({
  //     bidAmount: ['', [Validators.required]
  // });

  }
  // saveBidData( bid: any) {
  //   this._bidService.saveBid(bid).subscribe
  //     (
  //       () => this.onSaveComplete(),
  //       (error: any) => this.errorMessage = <any>error
  //   );
  // }
  // onSaveComplete() {
  //    // Reset the form to clear the flags
  //   //  this.#formName.reset();
  //   //  this.router.navigate(['/']);
  // }
}
