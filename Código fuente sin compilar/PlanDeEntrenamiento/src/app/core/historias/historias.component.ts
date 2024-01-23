// historias.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoriesService } from 'src/app/shared/stories.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent implements OnDestroy {
  userData: any[] = [];
  private subscription: Subscription;

  constructor(private storiesService: StoriesService) {
    this.subscription = this.storiesService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
