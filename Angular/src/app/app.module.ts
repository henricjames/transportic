import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerCompComponent } from './shared-components/spinner-comp/spinner-comp.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { DummyComponentComponent } from './shared-components/dummy-component/dummy-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerCompComponent,
    CustomerComponentComponent,
    DummyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }