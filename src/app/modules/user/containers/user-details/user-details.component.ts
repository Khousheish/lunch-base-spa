import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGEX } from '@Consts/regex.const';
import { FieldNames } from '@Enums/field-names.enum';
import { User } from '@Modules/user/shared/models/user.model';
import { UserFacade } from '@Modules/user/store/user.facade';

@Component({
  selector: 'lb-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  public userDetailsForm: FormGroup | null = null;
  public readonly fieldNames: typeof FieldNames = FieldNames;
  public user: Promise<User> | null = null;
  public editMode: boolean = false;

  public constructor(
    private readonly userFacade: UserFacade,
    private readonly formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.userDetailsForm = this.createUserForm();
    // tslint:disable-next-line: typedef
    this.user = new Promise<User>((resolve, reject): void => {
      resolve({
        id: 1,
        username: 'shahdabbar',
        email: 'shahdabbar@gmail.com',
        firstName: 'Shahd',
        lastName: 'Abbar',
        vegetarian: true,
        createdAt: '2020-02-02',
      });
    });
  }

  public Save(): void {
    this.editMode = !this.editMode;
  }

  private createUserForm(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.Vegetarian]: ['', [Validators.required]],
      [FieldNames.Username]: ['', [Validators.required, Validators.minLength(3), Validators.pattern(REGEX.userName)]],
    });
  }
}
