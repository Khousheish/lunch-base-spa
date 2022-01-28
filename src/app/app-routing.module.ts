import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutes, ModuleRoutes, RoutePathMatchOptions } from '@Enums/routes.enum';
import { Module } from '@Types/module.type';

const routes: Routes = [
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<Module> => import('./modules/auth/auth.module')
      .then((module: Module): Module => module.AuthModule),
  },
  {
    path: ModuleRoutes.User,
    loadChildren: (): Promise<Module> => import('./modules/user/user.module')
      .then((module: Module): Module => module.UserModule),
  },
  {
    path: ModuleRoutes.Root,
    pathMatch: RoutePathMatchOptions.Full,
    redirectTo: `${ModuleRoutes.Auth}/${AuthRoutes.SignIn}`,
  },
  {
    path: ModuleRoutes.Others,
    redirectTo: `${ModuleRoutes.Auth}/${AuthRoutes.SignIn}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
