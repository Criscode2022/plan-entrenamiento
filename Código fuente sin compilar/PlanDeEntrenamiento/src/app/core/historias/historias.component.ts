import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { StoriesService } from 'src/app/shared/stories.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css'],
})
export class HistoriasComponent {
  public userData: any;

  constructor(
    private http: HttpClient,
    private viewportScroller: ViewportScroller,
    private storiesService: StoriesService
  ) {}

  ngOnInit() {
    this.storiesService.getUsers().subscribe((response) => {
      this.userData = response;
    });
  }
}
