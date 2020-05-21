import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.scss']
})
export class CustomerComponentComponent implements OnInit {
  @Input() phone
  email
  comment

  constructor() { }

  ngOnInit(): void {
    this.phone=9497506516;
    this.email='heeratopentrends.net';
    this.comment='comment';
  }

}
