import { Component, OnInit } from '@angular/core';
import { Pincode } from '../../../models/pincode.model';

@Component({
  selector: 'app-pincode-listing',
  templateUrl: './pincode-listing.component.html',
  styleUrls: ['./pincode-listing.component.scss'],
})
export class PincodeListingComponent implements OnInit {
  pincodes: Pincode[] = [
    {
      title: 'PIN CODE Y44C9',
      terminal: 'BEST',
      date: '00/00/2020 · 15:00',
      container: 'ZIMU1234567 - 22G0',
      status: 'RECOGIDA/ENTREGA LLENO/VACÍO',
      type: 'green',
    },
    {
      title: 'PIN CODE Y44C10',
      terminal: 'BESTTTT',
      date: '00/00/2020 · 15:00',
      container: 'ZIMU1234567 - 22G0000',
      status: 'RECOGIDA/ENTREGA LLENO/VACÍOOO',
      type: 'yellow',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
