import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubsDirective } from 'src/app/core/directives/subs.directive';
import { StoriesService } from '../../core/Services/stories/stories.service';

@Component({
  selector: 'app-insert-story',
  templateUrl: './insert-story.component.html',
  styleUrls: ['./insert-story.component.scss'],
})
export class InsertStoryComponent extends SubsDirective implements OnDestroy {
  protected storyForm: FormGroup;
  protected error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private storiesService: StoriesService,
  ) {
    super();
    this.storyForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      apellido: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(16), Validators.max(110)]],
      texto: ['', [Validators.required]],
      avatar: '',
    });
  }

  onSubmit() {
    if (this.storyForm.valid) {
      const newPerson = this.storyForm.value;
      const addPersonSubscription = this.storiesService
        .addPerson(newPerson)
        .subscribe({
          next: () => {
            this.storyForm.reset();
            this.markFormAsUntouchedPristine(this.storyForm);
          },
          error: (error) => {
            this.error = error.message;
          },
        });
      this.subs.add(addPersonSubscription);
    }
  }

  private markFormAsUntouchedPristine(form: FormGroup) {
    form.markAsUntouched();
    form.markAsPristine();
    Object.keys(form.controls).forEach((control) => {
      form.get(control)?.setErrors(null);
    });
  }
}
