import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { PincodeListComponent } from './pages/pincode-list/pincode-list.component';
import { PincodeDetailComponent } from './pages/pincode-detail/pincode-detail.component';
import { PincodeAddComponent } from './pages/pincode-add/pincode-add.component';


@NgModule({
  declarations: [PincodeListComponent, PincodeDetailComponent, PincodeAddComponent],
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  exports: [

  ]
})
export class GuestModule { }
