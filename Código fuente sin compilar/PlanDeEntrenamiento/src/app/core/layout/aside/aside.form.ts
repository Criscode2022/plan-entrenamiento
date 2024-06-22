import { inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export class AsideForm {
  private formBuilder = inject(FormBuilder);

  private skeleton = {
    nombre: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.min(16)]],
    IMC: [null as number | null, [Validators.required, this.nullableMin(0)]],
    selectOption: [null, [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  };

  protected form = this.formBuilder.group(this.skeleton);

  get IMC() {
    return this.form.get('IMC')?.value;
  }

  get nombre() {
    return this.form.get('nombre')?.value;
  }

  get edad() {
    return this.form.get('edad')?.value;
  }

  get selectOption() {
    return this.form.get('selectOption')?.value;
  }

  get email() {
    return this.form.get('email')?.value;
  }

  protected reset() {
    this.form.reset({
      nombre: '',
      edad: '',
      IMC: null,
      selectOption: null,
      email: '',
    });

    this.markFormGroupPristineAndUntouched(this.form);
  }

  private markFormGroupPristineAndUntouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormControl) {
        control.markAsPristine();
        control.markAsUntouched();
      } else if (control instanceof FormGroup) {
        this.markFormGroupPristineAndUntouched(control);
      }
    });
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
