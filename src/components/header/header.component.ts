import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  lastScrollTop = 0;
  isHidden = false;
  isDark = false;

  // Hide header on scroll
  @HostListener('window:scroll', [])
  onScroll() {
    const current = window.scrollY;

    if (current > this.lastScrollTop && current > 50) {
      this.isHidden = true;    // hide header when scrolling down
    } else {
      this.isHidden = false;   // show when scroll up
    }

    this.lastScrollTop = current <= 0 ? 0 : current;
  }

  constructor() {
    // Load theme
    const theme = localStorage.getItem('theme');
    this.isDark = theme === 'dark';

    // Add/remove class on <html>
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  // Toggle theme
  // toggleTheme() {
  //   this.isDark = !this.isDark;

  //   document.documentElement.classList.toggle('dark', this.isDark);

  //   localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  // }
}
