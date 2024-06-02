import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataService } from 'src/app/core/Services/shared-data/shared-service.service';

@Component({
  selector: 'app-indicemasa',
  templateUrl: './indicemasa.component.html',
  styleUrls: ['./indicemasa.component.scss'],
})
export class IndicemasaComponent {
  protected IMC = 0;
  protected colorTextoIMC = '';

  private skeleton = {
    peso: [0, [Validators.required, Validators.min(1), Validators.max(400)]],
    altura: [0, [Validators.required, Validators.min(1), Validators.max(250)]],
  };

  protected formBuilder = inject(FormBuilder);

  private sharedDataService = inject(SharedDataService);

  private snackBar = inject(MatSnackBar);

  protected imcForm = this.formBuilder.group(this.skeleton);

  get peso() {
    return this.imcForm.get('peso') as unknown as number;
  }

  get altura() {
    return this.imcForm.get('altura') as unknown as number;
  }

  protected openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  protected calcularIMC(altura: number, peso: number) {
    if (!altura || !peso) {
      return null;
    }

    const metros = altura / 100;
    this.IMC = parseFloat((peso / (metros * metros)).toFixed(2));

    this.cambiarColor();

    this.sharedDataService.setData(this.IMC);
    this.sharedDataService.getData();

    return this.IMC;
  }

  private cambiarColor() {
    if ((this.IMC && this.IMC >= 25) || (this.IMC && this.IMC < 18.5)) {
      this.colorTextoIMC = 'red';
    } else {
      this.colorTextoIMC = 'green';
    }
  }
}
