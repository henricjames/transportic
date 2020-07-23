import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'profile', component: MyProfileComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOperationsRoutingModule {}
