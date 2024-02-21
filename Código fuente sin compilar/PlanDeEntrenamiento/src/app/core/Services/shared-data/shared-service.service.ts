import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private IMCSubject = new BehaviorSubject<number | null>(null);

  // Only-reading Observable
  public IMC$ = this.IMCSubject.asObservable();

  constructor() {}

  setData(data: number) {
    this.IMCSubject.next(data);
  }
  getData(): number {
    return this.IMCSubject.getValue() || 0;
  }
}
