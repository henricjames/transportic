import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextfieldComponent } from './textfield/textfield.component';



const routes: Routes = [

  { path: 'textfield', component: TextfieldComponent },
  { path: 'textfield',   redirectTo: '/textfiled', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
