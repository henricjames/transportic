import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss'],
})
export class ExternalLinksComponent implements OnInit {
  @Input() label: string;
  constructor() {}

  ngOnInit(): void {}
}
