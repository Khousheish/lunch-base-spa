import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRoutes } from '@Enums/routes.enum';

import { UserDetailsComponent } from './containers/user-details/user-details.component';

const routes: Routes = [
  {
    path: UserRoutes.Root,
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
