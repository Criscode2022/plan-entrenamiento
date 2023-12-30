//Este servicio descarga las historias de usuario de la API y las almacena en una observable
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = environment.supabaseUrl;
    const supabaseKey = environment.supabaseKey;
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  public getUsers(): Observable<any> {
    return new Observable((observer) => {
      this.supabase
        .from('personas')
        .select('*')
        .then(
          (response) => {
            if (response.error) {
              observer.error(response.error);
            } else {
              observer.next(response.data);
            }
            observer.complete();
          },
          (error) => observer.error(error)
        ); // Manejo del error aquí
    });
  }

  addPerson(person: any): Observable<any> {
    return new Observable((observer) => {
      this.supabase
        .from('personas')
        .insert([person])
        .then(
          (response) => {
            if (response.error) {
              observer.error(response.error);
            } else {
              observer.next(response.data);
            }
            observer.complete();
          },
          (error) => observer.error(error)
        );
    });
  }
}
