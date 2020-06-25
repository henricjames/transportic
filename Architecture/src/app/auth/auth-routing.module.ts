import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent }
];
RouterModule.forRoot([{ path: '', component: LoginComponent }]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
