import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  // BehaviorSubject para almacenar y emitir los datos de IMC
  private IMCSubject = new BehaviorSubject<number>(0);

  // Observable para exponer el BehaviorSubject al exterior
  public IMC$ = this.IMCSubject.asObservable();

  constructor() {}

  // Método para actualizar el BehaviorSubject
  setData(data: number) {
    this.IMCSubject.next(data);
  }

  // Método para obtener el último valor del BehaviorSubject
  getData(): number {
    return this.IMCSubject.getValue();
  }
}
