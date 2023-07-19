//Este servicio se encarga de transmitir datos entre componentes en diferentes rutas

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  public sharedData: number = 0;

  constructor() {}

  setData(data: number) {
    this.sharedData = data;
  }

  getData(): any {
    return this.sharedData;
  }
}
