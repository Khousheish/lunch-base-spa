import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { ThemeSwitcherModule } from '@Components/theme-switcher/theme-switcher.module';
import { AccessTokenService } from '@Modules/auth/shared/access-token.service';
import { ComponentsType, ModulesType } from '@Types/module.type';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LayoutComponent } from './layout.component';

const components: ComponentsType = [
  LayoutComponent,
  NavigationBarComponent,
];

const primeNgModules: ModulesType = [
  MenubarModule,
  AvatarModule,
  OverlayPanelModule,
];

const modules: ModulesType = [
  ...primeNgModules,
  CommonModule,
  ThemeSwitcherModule,
  TranslateModule.forChild({}),
];

const providers: Provider[] = [
  AccessTokenService,
];

@NgModule({
  declarations: [ ...components ],
  imports: [ ...modules ],
  providers: [ ...providers ],
  exports: [ ...components ],
})
export class LayoutModule {
}
