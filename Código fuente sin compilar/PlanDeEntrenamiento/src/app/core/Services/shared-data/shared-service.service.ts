import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private IMCSubject = new BehaviorSubject<number>(0);

  // Only-reading Observable
  public IMC$ = this.IMCSubject.asObservable();

  constructor() {}

  setData(data: number) {
    this.IMCSubject.next(data);
  }
}
