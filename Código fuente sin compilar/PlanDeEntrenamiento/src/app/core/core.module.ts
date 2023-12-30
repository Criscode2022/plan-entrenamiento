import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './aside/aside.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IndicemasaComponent } from './indicemasa/indicemasa.component';
import {
  DialogoComponent,
  DialogContentExampleDialog,
} from './dialogo/dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HistoriasComponent } from './historias/historias.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertStoryComponent } from './insert-story/insert-story.component';

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
    AboutComponent,
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
