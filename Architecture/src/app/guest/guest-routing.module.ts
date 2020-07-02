import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PincodeListComponent } from './pages/pincode-list/pincode-list.component';
import { PincodeDetailComponent } from './pages/pincode-detail/pincode-detail.component';
import { PincodeAddComponent } from './pages/pincode-add/pincode-add.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';


const routes: Routes = [
  {path: 'list', component: PincodeListComponent},
  {path: 'details/:id', component: PincodeDetailComponent},
  {path: 'add', component: PincodeAddComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
