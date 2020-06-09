import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonComponent } from './button/button.component';

import { AlertModule } from 'ngx-bootstrap/alert';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AlertModule.forRoot()
  ],
  exports: [
    TranslateModule,
    AlertModule,
    ButtonComponent
  ]
})
export class SharedModule { }
