import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { strValue } from 'src/main';
import { StoriesService } from '../../Services/stories/stories.service';

@Component({
  selector: 'app-insert-story',
  templateUrl: './insert-story.component.html',
  styleUrls: ['./insert-story.component.scss'],
})
export class InsertStoryComponent implements OnDestroy {
  storyForm: FormGroup;
  error: strValue = null;
  private subscription: Subscription = new Subscription();

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
      avatar: '',
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.storyForm.valid) {
      const newPerson = this.storyForm.value;
      const addPersonSubscription = this.storiesService
        .addPerson(newPerson)
        .subscribe({
          next: () => {
            this.resetForm();
          },
          error: (error) => {
            this.error = error.message;
          },
        });
      this.subscription.add(addPersonSubscription);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
