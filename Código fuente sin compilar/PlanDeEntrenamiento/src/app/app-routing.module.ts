import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './core/components/bienvenida/bienvenida.component';
import { EntrenadoresComponent } from './core/components/entrenadores/entrenadores.component';
import { HistoriasComponent } from './core/components/historias/historias.component';
import { IndicemasaComponent } from './core/components/indicemasa/indicemasa.component';

const routes: Routes = [
  {
    path: '', // Ruta por defecto.
    component: BienvenidaComponent,
  },
  { path: 'entrenadores', component: EntrenadoresComponent },
  { path: 'indicemasa', component: IndicemasaComponent },
  { path: 'historias', component: HistoriasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
