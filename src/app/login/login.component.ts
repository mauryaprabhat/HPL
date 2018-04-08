 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {
    this.forms = fb.group({
      'name' : this.username,
      'password' : this.password
    });
   }
   forms: FormGroup;
   username = new FormControl('', Validators.required );
   password = new FormControl('', Validators.required );

  ngOnInit() {

  }
  login() {
     const formmusername = this.username.value;
     const formpwd = this.password.value;
     if (formmusername === 'admin') {
        if (formpwd === 'admin') {
          alert('Successful Login!!!');
          this.router.navigate(['/auctionHome']);
        } else {
          alert('Please enter correct password!');
        }
     } else {
       alert ('Please enter correct username');
     }
     this.reset();
  }
  reset() {
    this.forms.reset();
 }
}
