import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isDarkMode = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  toggleDarkMode() {
    const hostElem = this.el.nativeElement;
    if (this.isDarkMode) {
      this.renderer.addClass(hostElem, 'dark-mode');
    } else {
      this.renderer.removeClass(hostElem, 'dark-mode');
    }
    this.isDarkMode = !this.isDarkMode;
  }
}
