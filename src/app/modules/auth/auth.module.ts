import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.type';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { AccessTokenService } from './shared/access-token.service';
import { AuthRepository } from './shared/auth.repository';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { authReducer } from './store/auth.reducers';

const primeNgModules: ModulesType = [
  ButtonModule,
  PasswordModule,
  InputTextModule,
  CheckboxModule,
  CardModule,
  DividerModule,
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
  SignUpComponent,
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  providers: [...providers],
})
export class AuthModule {
}
