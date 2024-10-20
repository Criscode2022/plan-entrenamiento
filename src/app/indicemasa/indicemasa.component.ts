import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataService } from 'src/app/core/Services/shared-data/shared-service.service';
import { ImcInfoDialog } from '../shared/dialogs/dialogo/imc-info-dialog.component';
import { IndiceMasaForm } from './indicemasa.form';

@Component({
  selector: 'app-indicemasa',
  templateUrl: './indicemasa.component.html',
  styleUrls: ['./indicemasa.component.scss'],
})
export class IndicemasaComponent extends IndiceMasaForm {
  protected IMC = 0;

  protected dialog = inject(MatDialog);

  private sharedDataService = inject(SharedDataService);

  private snackBar = inject(MatSnackBar);

  protected openDialog() {
    this.dialog.open(ImcInfoDialog);
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

  protected openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 6000 });
  }
}
