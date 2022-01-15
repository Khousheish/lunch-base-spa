import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutes, RoutePathMatchOptions } from '@Enums/routes.enum';

import { SignInComponent } from './containers/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: SignInComponent,
  },
  {
    path: AuthRoutes.Root,
    pathMatch: RoutePathMatchOptions.Full,
    redirectTo: AuthRoutes.SignIn,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
