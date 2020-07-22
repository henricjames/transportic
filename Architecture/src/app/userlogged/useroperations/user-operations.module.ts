import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOperationsRoutingModule } from './user-operations-routing.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    UserOperationsRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
  ],
})
export class UserOperationsModule {}
