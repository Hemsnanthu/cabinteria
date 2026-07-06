import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  
  loggedInUser = '';
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

  // constructor() {
  //   // Load theme
  //   const theme = localStorage.getItem('theme');
  //   this.isDark = theme === 'dark';

  //   // Add/remove class on <html>
  //   document.documentElement.classList.toggle('dark', this.isDark);
  // }


  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.userService.getUser();
    this.loggedInUser = user ? user.name : 'Guest';
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
