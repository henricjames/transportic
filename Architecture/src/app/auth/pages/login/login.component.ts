import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  label = 'button label';
  ngOnInit(): void {}
  goreg(){
    (window.location.href='http://localhost:4200/login/registration');
  }
  buttonClick() {
    console.log('button clicked');
  }
}
