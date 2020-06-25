import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CustomerComponentComponent } from './components/customerinfo-component/customerinfo-component.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { LanguageTranslatorComponent } from './components/language-translator/language-translator.component';
import { SummaryComponent } from './pages/summary/summary.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    CustomerComponentComponent,
    CookiesComponent,
    LanguageTranslatorComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ReactiveFormsModule, FormsModule]
})
export class AuthModule {}
