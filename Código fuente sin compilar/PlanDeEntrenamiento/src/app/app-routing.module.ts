import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './core/bienvenida/bienvenida.component';
import { EntrenadoresComponent } from './core/entrenadores/entrenadores.component';
import { IndicemasaComponent } from './core/indicemasa/indicemasa.component';
import { AboutComponent } from './core/about/about.component';
import { HistoriasComponent } from './core/historias/historias.component';

const routes: Routes = [
  {
    path: '', // Ruta por defecto.
    component: BienvenidaComponent,
  },
  { path: 'entrenadores', component: EntrenadoresComponent },
  { path: 'indicemasa', component: IndicemasaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'historias', component: HistoriasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
