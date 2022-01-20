import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ModuleRoutes } from '@Enums/routes.enum';

@Component({
  selector: 'lb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  public showNavBar: boolean = false;

  private readonly routerChangeSubscription: Subscription | null = null;

  public constructor(
    private readonly router: Router,
    private readonly location: Location,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public ngOnInit(): void {
    this.handleNavBarVisibility();

    this.router.events
      .pipe(filter((event: Event): boolean => event instanceof NavigationEnd))
      .subscribe(this.handleNavBarVisibility.bind(this));
  }

  public ngOnDestroy(): void {
    this.routerChangeSubscription?.unsubscribe();
  }

  private handleNavBarVisibility(): void {
    const currentPath: string = this.location.path();

    this.showNavBar = true;
    // this.showNavBar = !currentPath.includes(ModuleRoutes.Auth);

    this.changeDetectorRef.markForCheck();
  }
}
