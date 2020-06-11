import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'userlogged',
  loadChildren: () =>
    import('./userlogged/userlogged.module').then(m => m.UserloggedModule)
},
{
  path: 'guest', loadChildren: () =>
    import('./guest/guest.module').then(m => m.GuestModule)
},
{ path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
