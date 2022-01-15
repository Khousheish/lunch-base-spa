import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.type';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { AccessTokenService } from './shared/access-token.service';
import { AuthRepository } from './shared/auth.repository';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { authReducer } from './store/auth.reducers';

const primeNgModules: ModulesType = [
];

const modules: ModulesType = [
  ...primeNgModules,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  AuthRoutingModule,
  HttpClientModule,
  EffectsModule.forFeature([AuthEffects]),
  StoreModule.forFeature(ModuleRoutes.Auth, authReducer),
  TranslateModule.forChild({}),
];

const providers: Provider[] = [
  AuthFacade,
  AuthRepository,
  AccessTokenService,
];

const components: ComponentsType = [
  SignInComponent,
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  providers: [...providers],
})
export class AuthModule {
}
