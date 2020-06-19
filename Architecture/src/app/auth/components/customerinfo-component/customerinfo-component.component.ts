import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customerinfo-component.component.html',
  styleUrls: ['./customerinfo-component.component.scss']
})
export class CustomerComponentComponent implements OnInit {
  @Input() phone;
  email;
  comment;

  constructor() {}

  ngOnInit(): void {
    this.phone = 9935036510;
    this.email = 'atencioclient@portic.net';
    this.comment = 'Iniciar conversación';
  }
}
