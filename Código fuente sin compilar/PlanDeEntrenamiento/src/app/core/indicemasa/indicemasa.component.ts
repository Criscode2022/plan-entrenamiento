import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { numValue, strValue } from 'src/main';

@Component({
  selector: 'app-indicemasa',
  templateUrl: './indicemasa.component.html',
  styleUrls: ['./indicemasa.component.scss'],
})
export class IndicemasaComponent {
  protected IMC: numValue;
  protected peso: numValue;
  protected altura: numValue;
  protected colorTextoIMC: strValue;
  protected imcForm: FormGroup;

  constructor(
    private SharedServiceService: SharedServiceService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.IMC = null;
    this.peso = null;
    this.altura = null;
    this.colorTextoIMC = null;
    this.imcForm = this.formBuilder.group({
      peso: [
        null,
        [Validators.required, Validators.min(0), Validators.max(400)],
      ],
      altura: [
        null,
        [Validators.required, Validators.min(0), Validators.max(250)],
      ],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  public calcularIMC(altura: numValue, peso: numValue) {
    if (altura && peso) {
      const metros = altura / 100;
      this.IMC = +(peso / (metros * metros)).toFixed(2);
      this.cambiarColor();
      this.SharedServiceService.setData(this.IMC);
      this.SharedServiceService.getData();

      return this.IMC;
    }

    return null;
  }

  public cambiarColor() {
    if (this.IMC) {
      if (this.IMC >= 25) {
        this.colorTextoIMC = 'red';
      } else if (this.IMC < 18.5) {
        this.colorTextoIMC = 'red';
      } else {
        this.colorTextoIMC = 'green';
      }
    }
  }
}
