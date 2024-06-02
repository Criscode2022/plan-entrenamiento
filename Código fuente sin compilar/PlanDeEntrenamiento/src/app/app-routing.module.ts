import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { EntrenadoresComponent } from './components/entrenadores/entrenadores.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { IndicemasaComponent } from './components/indicemasa/indicemasa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
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
