import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { HistoriasComponent } from './historias/historias.component';
import { IndicemasaComponent } from './indicemasa/indicemasa.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent,
  },
  { path: 'entrenadores', component: EntrenadoresComponent },
  { path: 'indicemasa', component: IndicemasaComponent },
  { path: 'historias', component: HistoriasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
