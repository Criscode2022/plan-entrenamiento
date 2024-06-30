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
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { EntrenadoresComponent } from '../entrenadores/entrenadores.component';
import { HistoriasComponent } from '../historias/historias.component';
import { IndicemasaComponent } from '../indicemasa/indicemasa.component';
import { InsertStoryComponent } from '../insert-story/insert-story.component';
import { DialogoComponent } from '../shared/dialogs/dialogo/dialogo.component';
import { AsideComponent } from './layout/aside/aside.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    MainComponent,
    LayoutComponent,
    AsideComponent,
    BienvenidaComponent,
    EntrenadoresComponent,
    IndicemasaComponent,
    NavbarComponent,
    HistoriasComponent,
    InsertStoryComponent,
  ],
  exports: [LayoutComponent],
  imports: [
    DialogoComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
})
export class CoreModule {}
