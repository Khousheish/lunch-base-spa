import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { ThemeSwitcherService } from '@Components/theme-switcher/services/theme-switcher.service';
import { environment } from '@Environment';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  public constructor(
    private readonly titleService: Title,
    private readonly translateService: TranslateService,
    private readonly themeSwitcherService: ThemeSwitcherService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(environment.title);
    this.themeSwitcherService.initializeTheme();
    this.translateService.setDefaultLang(environment.defaultLang);
  }
}
