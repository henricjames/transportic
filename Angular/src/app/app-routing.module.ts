import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextfieldComponent } from './textfield/textfield.component';
import { DummyComponent } from './dummy/dummy.component';


const routes: Routes = [

  { path: 'textfield', component: TextfieldComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'textfield',   redirectTo: '/textfiled', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
