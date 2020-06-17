import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TextfieldComponent } from './textfield/textfield.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [TextfieldComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    TranslateModule,
    AlertModule,
    TextfieldComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule
  ]
})
export class SharedModule { }
