import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyComponentComponent } from './shared-components/dummy-component/dummy-component.component';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponentComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
