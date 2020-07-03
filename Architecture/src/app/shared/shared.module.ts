import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TextfieldComponent } from './textfield/textfield.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { RegformComponent } from './regform/regform.component';
import { PincodeListingComponent } from './pincode-listing/pincode-listing.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PincodeDetailsComponent } from './pincode-details/pincode-details.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    TextfieldComponent,
    LoaderComponent,
    RegformComponent,
    PincodeListingComponent,
    PageHeaderComponent,
    PincodeDetailsComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule.forRoot(),
  ],
  exports: [
    TranslateModule,
    AlertModule,
    TextfieldComponent,
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
    RegformComponent,
    PincodeListingComponent,
    PageHeaderComponent,
    PincodeDetailsComponent
  ],
})
export class SharedModule {}
