//Este servicio descarga las historias de usuario de la API y las almacena en una observable
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private supabase: SupabaseClient;
  private userData = new BehaviorSubject<any[]>([]);
  public userData$ = this.userData.asObservable();

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
    );
    this.loadUsers();
  }

  private loadUsers() {
    this.supabase
      .from('personas')
      .select('*')
      .then((response) => {
        if (!response.error) {
          this.userData.next(response.data);
        }
      });
  }

  public addPerson(person: any): Observable<any> {
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
              this.loadUsers();
            }
            observer.complete();
          },
          (error) => observer.error(error),
        );
    });
  }
}
