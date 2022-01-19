import { TestBed } from '@angular/core/testing';

import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', (): void => {
  let service: ThemeSwitcherService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
