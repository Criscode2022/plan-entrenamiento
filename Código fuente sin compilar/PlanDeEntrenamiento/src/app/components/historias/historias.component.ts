// historias.component.ts
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { StoriesService } from '../../core/Services/stories/stories.service';
import { SubsDirective } from '../../core/directives/subs.directive';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent
  extends SubsDirective
  implements OnInit, OnDestroy
{
  protected userData: any[] = [];

  private storiesService = inject(StoriesService);

  ngOnInit(): void {
    this.subs = this.storiesService.userData$.subscribe((data) => {
      this.userData = data;
    });
  }
}
