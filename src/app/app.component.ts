import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { ThemeSwitcherService } from '@Components/theme-switcher/services/theme-switcher.service';
import { SupportedLanguages } from '@Enums/supported-languages.enum';
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
    const supportedLangs: SupportedLanguages[] = [SupportedLanguages.English, SupportedLanguages.Dutch];
    this.translateService.setDefaultLang(environment.defaultLang);
    this.translateService.use(localStorage.getItem('language') === SupportedLanguages.English
      ? SupportedLanguages.English
      : SupportedLanguages.Dutch,
    );
    supportedLangs.forEach((language: SupportedLanguages): void => {
      this.translateService.reloadLang(language);
    });
  }
}
