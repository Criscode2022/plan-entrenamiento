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

  private skeleton = {
    peso: [0, [Validators.required, Validators.min(1), Validators.max(400)]],
    altura: [0, [Validators.required, Validators.min(1), Validators.max(250)]],
  };

  protected formBuilder = inject(FormBuilder);

  private sharedDataService = inject(SharedDataService);

  private snackBar = inject(MatSnackBar);

  protected form = this.formBuilder.group(this.skeleton);

  get peso() {
    return this.form.get('peso');
  }

  get altura() {
    return this.form.get('altura');
  }

  protected openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 6000 });
  }

  protected calcularIMC(altura: number, peso: number) {
    if (!altura || !peso) {
      console.error('Altura o peso no definidos');
      return;
    }

    const metros = altura / 100;
    this.IMC = parseFloat((peso / (metros * metros)).toFixed(2));

    this.sharedDataService.setData(this.IMC);

    if (this.IMC >= 30) {
      this.openSnackBar(
        'Tu IMC es superior al recomendado, tienes obesidad',
        'Cerrar',
      );
    } else if (this.IMC >= 25 && this.IMC < 30) {
      this.openSnackBar(
        'Tu IMC es superior al recomendado, tienes sobrepeso',
        'Cerrar',
      );
    } else if (this.IMC < 18.5) {
      this.openSnackBar(
        'Tu IMC es inferior al recomendado, tienes bajo peso',
        'Cerrar',
      );
    } else {
      this.openSnackBar('Tu IMC es el recomendado', 'Cerrar');
    }

    return this.IMC;
  }
}
