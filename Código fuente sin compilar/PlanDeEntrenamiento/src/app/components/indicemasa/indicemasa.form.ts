import { inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SubsDirective } from 'src/app/core/directives/subs.directive';

export class IndiceMasaForm extends SubsDirective {
  private formBuilder = inject(FormBuilder);

  private skeleton = {
    peso: [
      null as number | null,
      [Validators.required, Validators.max(400), this.nullableMin(1)],
    ],
    altura: [
      null as number | null,
      [Validators.required, Validators.max(250), this.nullableMin(1)],
    ],
  };

  protected form = this.formBuilder.group(this.skeleton);

  get peso() {
    return this.form.get('peso');
  }

  get altura() {
    return this.form.get('altura');
  }

  private nullableMin(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value === null || value >= min) {
        return null;
      }
      return { min: { min, actual: value } };
    };
  }
}
