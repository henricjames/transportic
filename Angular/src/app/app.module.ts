import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextfieldComponent } from './textfield/textfield.component';
import {ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { SpinnerCompComponent } from './shared-components/spinner-comp/spinner-comp.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { DummyComponentComponent } from './shared-components/dummy-component/dummy-component.component';
import { ButtonComponent } from './shared-components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    ButtonComponent,
    SpinnerCompComponent,
    CustomerComponentComponent,
    DummyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
