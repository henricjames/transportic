import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() phone = 9935036510;
  @Input() email = 'atencioclient@portic.net';
  @Input() comment = 'Iniciar conversación';

  constructor() {}

  ngOnInit(): void {}
}
