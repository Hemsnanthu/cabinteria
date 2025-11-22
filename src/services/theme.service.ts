import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.loadTheme();
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains('dark-theme');
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');

    localStorage.setItem(
      'theme',
      this.isDarkTheme() ? 'dark' : 'light'
    );
  }

  loadTheme(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }
}
