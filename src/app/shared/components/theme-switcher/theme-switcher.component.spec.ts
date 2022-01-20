import { ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', (): void => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(async(): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSwitcherComponent ],
    })
    .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
