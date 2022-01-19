import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AccessTokenService } from '@Modules/auth/shared/access-token.service';
import { User } from '@Modules/user/shared/models/user.model';
import { UserFacade } from '@Modules/user/store/user.facade';

@Component({
  selector: 'lb-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  public menubarItems: MenuItem[] = [];

  public profileName: string = '';
  public profileUsername: string = '';
  public profileAvatar: string = '';

  private profileSubscription: Subscription | null = null;

  public constructor(
    private readonly userFacade: UserFacade,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }

  public ngOnInit(): void {
    this.profileSubscription = this.userFacade.user$
      .pipe(filter((user: User): boolean => !!user.id))
      .subscribe((user: User): void => {
        this.profileUsername = user.username;
        this.profileName = `${user.firstName[0]}${user.lastName[0]}`;

        this.changeDetectorRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.profileSubscription?.unsubscribe();
  }

  public logout(): void {
    this.accessTokenService.deleteAccessToken();
  }
}
