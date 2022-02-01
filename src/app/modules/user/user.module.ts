import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.type';

import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserEffects } from './store/user.effects';
import { UserFacade } from './store/user.facade';
import { userReducer } from './store/user.reducers';
import { UserRoutingModule } from './user-routing.module';

const primeNgModules: ModulesType = [
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  CardModule,
];

const modules: ModulesType = [
  ...primeNgModules,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  UserRoutingModule,
  EffectsModule.forFeature([UserEffects]),
  StoreModule.forFeature(ModuleRoutes.User, userReducer),
  TranslateModule.forChild({}),
];

const services: Provider[] = [
  UserFacade,
];

const components: ComponentsType = [
  UserDetailsComponent,
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  providers: [...services],
})
export class UserModule {
}
