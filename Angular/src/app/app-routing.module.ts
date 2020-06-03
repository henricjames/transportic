import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextfieldComponent } from './textfield/textfield.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
