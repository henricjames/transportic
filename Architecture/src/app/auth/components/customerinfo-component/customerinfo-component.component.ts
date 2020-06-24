import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customerinfo-component.component.html',
  styleUrls: ['./customerinfo-component.component.scss']
})
export class CustomerComponentComponent implements OnInit {
  @Input() phone = 9935036510;
  @Input() email = 'atencioclient@portic.net';
  @Input() comment = 'Iniciar conversación';

  constructor() {}

  ngOnInit(): void {

  }
}
