import { inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class AsideForm {
  private formBuilder = inject(FormBuilder);

  private skeleton = {
    nombre: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.min(16)]],
    IMC: [0, [Validators.required]],
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
      IMC: 0,
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
}
