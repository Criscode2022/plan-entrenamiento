import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './aside/aside.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import {
  DialogContentExampleDialog,
  DialogoComponent,
} from './dialogo/dialogo.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { HistoriasComponent } from './historias/historias.component';
import { IndicemasaComponent } from './indicemasa/indicemasa.component';
import { InsertStoryComponent } from './insert-story/insert-story.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    MainComponent,
    LayoutComponent,
    AsideComponent,
    BienvenidaComponent,
    EntrenadoresComponent,
    IndicemasaComponent,
    DialogoComponent,
    DialogContentExampleDialog,
    NavbarComponent,
    HistoriasComponent,
    InsertStoryComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule {}
