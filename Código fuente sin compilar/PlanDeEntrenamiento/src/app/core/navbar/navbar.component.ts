import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  colorHome = '';
  showButtons = false;
  isGroupOpen = false;
  isHidden = false;

  toggleGroup() {
    this.isHidden = !this.isHidden;
  }
}
