import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SupportedLanguages } from '@Enums/supported-languages.enum';

@Component({
  selector: 'lb-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  public currentLanguage: string = SupportedLanguages.English;

  public constructor(
    public readonly translateService: TranslateService,
  ) {
  }

  public ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language') === SupportedLanguages.English
      ? SupportedLanguages.English
      : SupportedLanguages.Dutch;
  }

  public changeLanguage(): void {
    this.translateService.currentLang !== SupportedLanguages.English
      ? this.translateService.use(SupportedLanguages.English)
      : this.translateService.use(SupportedLanguages.Dutch);
    this.currentLanguage = this.translateService.currentLang;
    localStorage.setItem('language', `${this.currentLanguage}`);

  }
}
