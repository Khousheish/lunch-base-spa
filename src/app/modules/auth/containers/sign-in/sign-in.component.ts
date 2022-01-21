import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGEX } from '@Consts/regex.const';
import { FieldNames } from '@Enums/field-names.enum';
import { AuthFacade } from '@Modules/auth/store/auth.facade';

@Component({
  selector: 'lb-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {

  public signInDetailsForm: FormGroup | null = null;
  public readonly fieldNames: typeof FieldNames = FieldNames;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade,
  ) {
  }

  public ngOnInit(): void {
    this.signInDetailsForm = this.createSignInForm();
  }

  public signIn(): void {
    this.authFacade.signIn(this.signInDetailsForm?.value);
  }

  private createSignInForm(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.Identity]: ['', [Validators.required, Validators.minLength(3)]],
      [FieldNames.Password]: ['', [Validators.required, Validators.minLength(8), Validators.pattern(REGEX.password)]],
    });
  }
}
