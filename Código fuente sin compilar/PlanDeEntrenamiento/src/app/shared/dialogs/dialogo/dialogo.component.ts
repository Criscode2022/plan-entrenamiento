import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class DialogoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog);
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog {}
