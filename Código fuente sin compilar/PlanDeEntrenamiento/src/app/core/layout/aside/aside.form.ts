import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
