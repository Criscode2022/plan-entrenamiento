import { Component } from '@angular/core';
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

  constructor(private SharedServiceService: SharedServiceService) {
    this.SharedServiceService.IMC$.subscribe((data) => {
      this.IMC = data;
      this.check(); // Check if all fields are filled when IMC is updated
    });
  }

  public imprimir() {
    this.datos = [];
    this.datos.push(this.nombre);
    this.datos.push(this.edad.toString());
    this.datos.push(this.selectOption);
    this.datos.push(this.entrenador);
    console.log(this.datos);
  }

  public borrar() {
    this.datos = [];
    this.nombre = '';
    this.selectOption = '';
    this.edad = '';
    this.IMC = 0;
  }

  public check() {
    console.log('checking...');
    console.log(this.edad);
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

  public recibido() {
    alert(
      '¡Listo! Tus datos han sido enviados correctamente, pronto nos pondremos en contacto contigo'
    );

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
