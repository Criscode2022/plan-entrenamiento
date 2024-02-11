import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PlanDeEntrenamiento';
  isDarkMode = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    const hostElem = this.el.nativeElement;
    if (this.isDarkMode) {
      this.renderer.addClass(hostElem, 'dark-mode');
    } else {
      this.renderer.removeClass(hostElem, 'dark-mode');
    }
  }
}
