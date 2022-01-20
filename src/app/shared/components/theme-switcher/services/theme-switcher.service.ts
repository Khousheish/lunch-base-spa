import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ThemeSwitcherService {
  public set isDarkTheme(isDarkTheme: boolean) {
    this._isDarkTheme = isDarkTheme;
  }

  public get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  private _isDarkTheme: boolean = false;

  public constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
  }

  public initializeTheme(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'true';

    this.changeTheme();
  }

  public changeTheme(isDarkTheme: boolean = this.isDarkTheme): void {
    const themeLink: HTMLLinkElement = this.document.getElementById('app-theme') as HTMLLinkElement;
    const themeName: string = isDarkTheme ? 'arya' : 'saga';

    if (themeLink.href) {
      themeLink.href = `${themeName}-blue.css`;
    }
    this.isDarkTheme = isDarkTheme;

    localStorage.setItem('theme', `${isDarkTheme}`);

    this.setBodyThemeClass(isDarkTheme);
  }

  private setBodyThemeClass(isDarkTheme: boolean): void {
    const addedClass: string = ThemeSwitcherService.getClassName(isDarkTheme);
    const removedClass: string = ThemeSwitcherService.getClassName(!isDarkTheme);

    this.document.body.classList.add(addedClass);
    this.document.body.classList.remove(removedClass);
  }

  private static getClassName(isDarkTheme: boolean): string {
    return isDarkTheme ? 'dark-theme' : 'light-theme';
  }
}
