import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

export enum FitnessData {
  'perder grasa' = 'Carla Alonso',
  'conseguir masa muscular' = 'Pilar Vázquez',
  'mejorar tu salud cardiovascular' = 'Manuel Rodríguez',
}
