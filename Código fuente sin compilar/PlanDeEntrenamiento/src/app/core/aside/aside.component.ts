import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { SharedServiceService } from './../../shared/shared-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  datos: string[] = [];
  IMC = '';
  nombre = '';
  edad = '';
  public sharedData: number = 0;
  selectOption: string = '';
  entrenador = '';
  desactivado: boolean = true;

  constructor(private SharedServiceService: SharedServiceService) {}

  public imprimir() {
    this.sharedData = this.SharedServiceService.getData();
    this.datos = [];
    this.datos.push(this.nombre);
    this.datos.push(this.edad);
    this.datos.push(this.selectOption);
    this.datos.push(this.entrenador);
    this.datos.push(String(this.sharedData));
    console.log(this.datos);
  }

  public borrar() {
    this.datos = [];
    this.nombre = '';
    this.selectOption = '';
    this.edad = '';
    this.IMC = '';
    this.sharedData = 0;
    this.desactivado = true;
  }
  public recibirdatos() {
    this.sharedData = this.SharedServiceService.getData();
    if (this.sharedData !== 0) {
      this.desactivado = false;
    }
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

  public recibido() {
    alert(
      '¡Listo! Tus datos han sido enviados correctamente, pronto nos pondremos en contacto contigo'
    );

    const data = {
      nombre: this.nombre,
      edad: this.edad,
      objetivo: this.selectOption,
      entrenador: this.entrenador,
      imc: this.sharedData,
    };

    const json = JSON.stringify(data);
    console.log('Data:', data);
    console.log('JSON:', json);

    // Crear un libro de trabajo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    // Crear una hoja de trabajo con los datos
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([data]); // nota que data está dentro de un array []

    // Añadir la hoja de trabajo al libro de trabajo
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Escribir el libro de trabajo en un archivo xlsx
    const wbout: ArrayBuffer = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });

    // Crear un blob con los datos
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Descargar el archivo
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.download = 'data.xlsx';
    a.href = url;
    a.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
  }
}
