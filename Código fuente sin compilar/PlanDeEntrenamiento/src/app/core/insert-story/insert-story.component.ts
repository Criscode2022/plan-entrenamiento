// insert-story.component.ts
import { Component } from '@angular/core';
import { StoriesService } from 'src/app/shared/stories.service';

@Component({
  selector: 'app-insert-story',
  templateUrl: './insert-story.component.html',
  styleUrls: ['./insert-story.component.scss'],
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
      next: () => {
        this.resetForm();
      },
      error: (error) => {
        this.error = error.message;
      },
    });
  }

  private resetForm() {
    this.newPerson = {
      nombre: '',
      apellido: '',
      edad: null,
      texto: '',
      avatar: '',
    };
    this.error = null;
  }
}
