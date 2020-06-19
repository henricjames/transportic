import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CustomerComponentComponent } from './pages/customer-component/customer-component.component';
import { CookiesComponent } from './pages/cookies/cookies.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    CustomerComponentComponent,
    CookiesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
