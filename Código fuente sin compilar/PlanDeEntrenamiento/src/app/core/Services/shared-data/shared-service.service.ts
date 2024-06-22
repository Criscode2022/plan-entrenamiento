import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // BehaviorSubject to store the data, null by default to not show anything

  private IMCSubject = new BehaviorSubject<number | null>(null);

  // Only-reading Observable
  public IMC$ = this.IMCSubject.asObservable();

  public setData(data: number) {
    this.IMCSubject.next(data);
  }
}
