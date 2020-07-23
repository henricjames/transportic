import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOperationsRoutingModule } from './user-operations-routing.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [MyProfileComponent, ContactComponent],
  imports: [
    CommonModule,
    UserOperationsRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
  ],
})
export class UserOperationsModule {}
