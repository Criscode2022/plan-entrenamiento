// insert-story.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService } from 'src/app/shared/stories.service';
import { strValue } from 'src/main';

@Component({
  selector: 'app-insert-story',
  templateUrl: './insert-story.component.html',
  styleUrls: ['./insert-story.component.scss'],
})
export class InsertStoryComponent {
  storyForm: FormGroup;
  error: strValue = null;

  constructor(
    private formBuilder: FormBuilder,
    private storiesService: StoriesService,
  ) {
    this.storyForm = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      apellido: ['', Validators.required],
      edad: [
        null,
        [Validators.required, Validators.min(14), Validators.max(110)],
      ],
      texto: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.storyForm.valid) {
      const newPerson = this.storyForm.value;
      this.storiesService.addPerson(newPerson).subscribe({
        next: () => {
          this.resetForm();
        },
        error: (error) => {
          this.error = error.message;
        },
      });
    }
  }

  private resetForm() {
    this.storyForm.reset({
      nombre: '',
      apellido: '',
      edad: null,
      texto: '',
      avatar: '',
    });
    this.error = null;
  }
}
