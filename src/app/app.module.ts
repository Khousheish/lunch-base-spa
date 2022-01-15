import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { getInitialState, REDUCER_PROVIDER, reducerToken } from '@AppStore';
import { UserModule } from '@Modules/user/user.module';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiTranslateLoader } from './shared/loaders/multi-translate.loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducerToken, { initialState: getInitialState }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: MultiTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    REDUCER_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
