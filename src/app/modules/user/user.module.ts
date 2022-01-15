import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.type';

import { UserEffects } from './store/user.effects';
import { UserFacade } from './store/user.facade';
import { userReducer } from './store/user.reducers';

const primeNgModules: ModulesType = [
];

const modules: ModulesType = [
  ...primeNgModules,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  EffectsModule.forFeature([UserEffects]),
  StoreModule.forFeature(ModuleRoutes.User, userReducer),
  TranslateModule.forChild({}),
];

const services: Provider[] = [
  UserFacade,
];

const components: ComponentsType = [
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  providers: [...services],
})
export class UserModule {
}
