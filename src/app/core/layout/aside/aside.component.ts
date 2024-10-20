import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { SharedDataService } from '../../Services/shared-data/shared-service.service';
import { AsideForm } from './aside.form';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent extends AsideForm implements OnInit, OnDestroy {
  protected entrenador = '';

  private snackBar = inject(MatSnackBar);
  private sharedDataService = inject(SharedDataService);

  ngOnInit(): void {
    this.subs.add(
      this.sharedDataService.IMC$.subscribe((IMC) => {
        this.form.patchValue({ IMC });
      }),
    );
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 6000 });
  }

  protected descargar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = {
      nombre: this.nombre?.value,
      edad: this.edad?.value,
      objetivo: this.selectOption?.value,
      entrenador: this.entrenador,
      imc: this.IMC?.value,
      email: this.email?.value,
    };

    console.log(data);

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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.openSnackBar(
      '¡Listo! Tus datos han sido enviados correctamente, pronto nos pondremos en contacto contigo',
      'Cerrar',
    );

    this.reset();
  }
}
