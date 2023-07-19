//Este servicio descarga las historias de usuario de la API y las almacena en una observable
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<any>(
      'https://criscode2022.github.io/api-entrenamiento/historias.json'
    );
  }
}
