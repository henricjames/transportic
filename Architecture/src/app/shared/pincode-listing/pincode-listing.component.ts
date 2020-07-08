import { Component, OnInit } from '@angular/core';
import { Pincode } from '../../../models/pincode.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pincode-listing',
  templateUrl: './pincode-listing.component.html',
  styleUrls: ['./pincode-listing.component.scss'],
})
export class PincodeListingComponent implements OnInit {
  pincodes: Pincode[] = [
    {
      id: 1,
      title: 'PIN CODE Y44C9',
      terminal: 'BEST',
      date: '00/00/2020 · 15:00',
      container: 'ZIMU1234567 - 22G0',
      status: 'RECOGIDA/ENTREGA LLENO/VACÍO',
      type: 'success',
    },
    {
      id: 2,
      title: 'PIN CODE Y44C10',
      terminal: 'BESTTTT',
      date: '00/00/2020 · 15:00',
      container: 'ZIMU1234567 - 22G0000',
      status: 'RECOGIDA/ENTREGA LLENO/VACÍOOO',
      type: 'info',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getDetail(pincode) {
    this.router.navigate([`/guest/details/${pincode.id}`]);
  }
}
