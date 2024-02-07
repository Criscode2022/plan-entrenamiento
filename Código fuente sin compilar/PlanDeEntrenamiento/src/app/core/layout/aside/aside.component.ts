import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { numValue } from 'src/main';
import * as XLSX from 'xlsx';
import { SharedDataService } from '../../Services/shared-data/shared-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  protected IMC: numValue = null;
  protected entrenador = '';
  protected userForm: FormGroup;

  constructor(
    private SharedDataService: SharedDataService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required, Validators.min(16)]],
      IMC: [null, { disabled: true }, [Validators.required]],
      selectOption: [null, [Validators.required]],
    });
    this.SharedDataService.IMC$.subscribe((data) => {
      if (data) {
        this.userForm.get('IMC')?.setValue({ disabled: true });
        this.userForm.get('IMC')?.setValue(data);
        this.IMC = data;
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  protected borrar() {
    this.userForm.reset();
  }

  protected descargar() {
    const data = {
      edad: this.userForm.get('edad')?.value,
      objetivo: this.userForm.get('selectOption')?.value,
      entrenador: this.entrenador,
      imc: this.IMC,
    };

    const json = JSON.stringify(data);
    console.log('Data:', data);
    console.log('JSON:', json);

    // XLSX library to export data to excel

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([data]);

    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    const wbout: ArrayBuffer = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.download = 'datos-plan.xlsx';
    a.href = url;
    a.click();

    URL.revokeObjectURL(url);
  }

  protected enviar() {
    this.openSnackBar(
      '¡Listo! Tus datos han sido enviados correctamente, pronto nos pondremos en contacto contigo',
      'Cerrar',
    );
  }
}
