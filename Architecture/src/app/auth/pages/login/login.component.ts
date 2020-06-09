import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  label = 'button label';

  ngOnInit(): void {
  }


  buttonClick() {
    console.log('button clicked');
  }

}
