import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'useroperations',
    loadChildren: () =>
      import('./useroperations/user-operations.module').then(
        (m) => m.UserOperationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserloggedRoutingModule {}
