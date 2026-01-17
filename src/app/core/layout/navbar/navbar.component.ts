import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isHidden = false;
  isDarkMode = false;

  ngOnInit() {
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }

  toggleGroup() {
    this.isHidden = !this.isHidden;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
