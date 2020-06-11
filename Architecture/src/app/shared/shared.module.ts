import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonComponent } from './button/button.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TextfieldComponent } from './textfield/textfield.component';
import {ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { RegformComponent } from './regform/regform.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [TextfieldComponent,ButtonComponent, LoaderComponent, RegformComponent],
  
  imports: [
    CommonModule,
    TranslateModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TranslateModule,
    AlertModule,
    TextfieldComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    LoaderComponent,
    RegformComponent
  ]
})
export class SharedModule { }
