import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pincode-details',
  templateUrl: './pincode-details.component.html',
  styleUrls: ['./pincode-details.component.scss'],
})
export class PincodeDetailsComponent implements OnInit {
  @Input() title: String;
  @Input() labelname: String;
  @Input() type: String;

  constructor() {}

  ngOnInit(): void {}
}
