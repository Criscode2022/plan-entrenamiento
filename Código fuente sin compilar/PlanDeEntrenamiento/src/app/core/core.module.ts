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
import { ButtonComponent } from '../shared/components/button/btn.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import {
  DialogContentExampleDialog,
  DialogoComponent,
} from './components/dialogo/dialogo.component';
import { EntrenadoresComponent } from './components/entrenadores/entrenadores.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { IndicemasaComponent } from './components/indicemasa/indicemasa.component';
import { InsertStoryComponent } from './components/insert-story/insert-story.component';
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
    DialogoComponent,
    DialogContentExampleDialog,
    NavbarComponent,
    HistoriasComponent,
    InsertStoryComponent,
  ],
  exports: [LayoutComponent],
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
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    ButtonComponent,
  ],
})
export class CoreModule {}
