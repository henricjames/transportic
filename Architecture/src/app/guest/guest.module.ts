import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GuestRoutingModule } from './guest-routing.module';
import { PincodeListComponent } from './pages/pincode-list/pincode-list.component';
import { PincodeDetailComponent } from './pages/pincode-detail/pincode-detail.component';
import { PincodeAddComponent } from './pages/pincode-add/pincode-add.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    PincodeListComponent,
    PincodeDetailComponent,
    PincodeAddComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ReactiveFormsModule, FormsModule]
})
export class GuestModule {}
