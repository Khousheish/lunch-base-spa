import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle(environment.title);
  }
}
