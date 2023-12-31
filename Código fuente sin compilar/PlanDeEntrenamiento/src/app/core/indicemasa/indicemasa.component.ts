import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedServiceService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-indicemasa',
  templateUrl: './indicemasa.component.html',
  styleUrls: ['./indicemasa.component.css'],
})
export class IndicemasaComponent {
  IMC!: number;
  peso!: number;
  altura!: number;
  colorTextoIMC: string = '';
  exceso: boolean = false;

  constructor(
    private SharedServiceService: SharedServiceService,
    private snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  public calcularIMC(altura: number, peso: number) {
    const metros = altura / 100;
    this.IMC = +(peso / (metros * metros)).toFixed(2); // Convert result to number with two decimal places
    console.log(`altura: ${altura}, peso: ${peso}, IMC: ${this.IMC}`);
    this.cambiarColor();
    this.SharedServiceService.setData(this.IMC);
    this.SharedServiceService.getData();
    this.openSnackBar(
      "Ahora puedes registrar tu IMC calculado haciendo click en 'Registrar IMC' calculado",
      '¡OK!'
    );

    return this.IMC;
  }

  public cambiarColor() {
    if (this.IMC >= 25 || this.IMC < 18.5) {
      this.colorTextoIMC = 'red';
    } else {
      this.colorTextoIMC = 'green';
    }
  }

  logValues(): void {
    console.log(`Peso: ${this.peso}, Altura: ${this.altura}`);
  }
}
