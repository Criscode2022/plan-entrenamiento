import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { SharedServiceService } from './../../shared/shared-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  protected datos: string[] = [];
  protected IMC!: number;
  protected nombre = '';
  protected edad = '';
  protected selectOption = '';
  protected entrenador = '';
  protected desactivado = true;

  constructor(
    private SharedServiceService: SharedServiceService,
    private snackBar: MatSnackBar
  ) {
    this.SharedServiceService.IMC$.subscribe((data) => {
      this.IMC = data;
      this.check();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  public imprimir() {
    this.datos = [];
    this.datos.push(this.nombre);
    this.datos.push(this.edad.toString());
    this.datos.push(this.selectOption);
    this.datos.push(this.entrenador);
  }

  public borrar() {
    this.datos = [];
    this.nombre = '';
    this.selectOption = '';
    this.edad = '';
    this.IMC = 0;
  }

  public check() {
    this.desactivado = !(
      this.nombre.trim() !== '' &&
      this.edad &&
      this.selectOption !== '' &&
      this.IMC > 0
    );
  }

  public asignarentrenador(entrenador: string) {
    switch (this.selectOption) {
      case 'perder grasa':
        this.entrenador = 'Carla Alonso';
        break;
      case 'conseguir masa muscular':
        this.entrenador = 'Pilar Vázquez';
        break;
      case 'mejorar tu salud cardiovascular':
        this.entrenador = 'Manuel Rodríguez';
        break;
    }
  }

  public descargar() {
    const data = {
      nombre: this.nombre,
      edad: this.edad,
      objetivo: this.selectOption,
      entrenador: this.entrenador,
      imc: this.IMC,
    };

    const json = JSON.stringify(data);
    console.log('Data:', data);
    console.log('JSON:', json);

    // Create a workbook
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    // Create the worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([data]);

    //Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // write the worbook as xlsx
    const wbout: ArrayBuffer = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });

    // Create a blob object with the content
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Descargar el archivo
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.download = 'datos-plan.xlsx';
    a.href = url;
    a.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
  }

  public enviar() {
    this.openSnackBar(
      '¡Listo! Tus datos han sido enviados correctamente, pronto nos pondremos en contacto contigo',
      'Cerrar'
    );
  }
}
