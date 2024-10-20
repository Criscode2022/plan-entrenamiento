import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'imc-info-dialog.component.html',
  styleUrls: ['./imc-info-dialog.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ImcInfoDialog {}
