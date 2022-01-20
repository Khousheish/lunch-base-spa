import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutes, RoutePathMatchOptions } from '@Enums/routes.enum';

import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: SignInComponent,
  },
  {
    path: AuthRoutes.SignUp,
    component: SignUpComponent,
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
