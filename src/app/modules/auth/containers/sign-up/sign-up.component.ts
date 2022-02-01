import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGEX } from '@Consts/regex.const';
import { FieldNames } from '@Enums/field-names.enum';
import { AuthFacade } from '@Modules/auth/store/auth.facade';

@Component({
  selector: 'lb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public signUpDetailsForm: FormGroup | null = null;
  public readonly fieldNames: typeof FieldNames = FieldNames;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade,
  ) { }

  public ngOnInit(): void {
    this.signUpDetailsForm = this.createSignUpForm();
  }

  // tslint:disable-next-line: prefer-function-over-method
  public signUp(): void {
    // this.authFacade.signUp(this.signUpDetailsForm?.value);
  }

  private createSignUpForm(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.FirstName]: ['', [Validators.required, Validators.minLength(3)]],
      [FieldNames.LastName]: ['', [Validators.required, Validators.minLength(3)]],
      [FieldNames.Email]: ['', [Validators.required, Validators.email]],
      [FieldNames.Vegetarian]: [false],
      [FieldNames.Username]: ['', [Validators.required, Validators.minLength(3), Validators.pattern(REGEX.userName)]],
      [FieldNames.Password]: ['', [Validators.required, Validators.minLength(8), Validators.pattern(REGEX.password)]],
      [FieldNames.Confirm_Password]: ['', [Validators.required, Validators.minLength(8), Validators.pattern(REGEX.password)]],
    },                            {
      // validators: this.confirmedValidator,
    });
  }

  // tslint:disable-next-line: prefer-function-over-method
  private confirmedValidator(formGroup: FormGroup): { [s: string]: boolean; } | null {
    const password: AbstractControl | null = formGroup.get(FieldNames.Password);
    const confirmPassword: AbstractControl | null = formGroup.get(FieldNames.Confirm_Password);

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
}
