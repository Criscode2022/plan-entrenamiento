import { Component } from '@angular/core';
import { StoriesService } from 'src/app/shared/stories.service';

@Component({
  selector: 'app-insert-story',
  templateUrl: './insert-story.component.html',
  styleUrls: ['./insert-story.component.css'],
})
export class InsertStoryComponent {
  newPerson = {
    nombre: '',
    apellido: '',
    edad: null,
    texto: '',
    avatar: '',
  };
  error: string | null = null;

  constructor(private storiesService: StoriesService) {}

  onSubmit() {
    this.storiesService.addPerson(this.newPerson).subscribe({
      next: (data) => {
        // Limpia el formulario o muestra un mensaje de éxito
        this.newPerson = {
          nombre: '',
          apellido: '',
          edad: null,
          texto: '',
          avatar: '',
        };
      },
      error: (error) => {
        // Maneja errores aquí
        this.error = error.message;
      },
    });
  }
}
