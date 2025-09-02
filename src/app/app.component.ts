import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BodyComponent } from '../components/body/body.component';
import { LoginComponent } from '../components/login/login.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from '../components/loginform/loginform.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminpanelComponent } from '../components/adminpanel/adminpanel.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,CommonModule,RouterOutlet,LandingpageComponent ,HeaderComponent,FooterComponent,LoginFormComponent,BodyComponent,LoginComponent,AboutComponent,ContactComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cabinteria';

 isLoggedIn = false;

  constructor(private router: Router) {
    // Detect login route and update isLoggedIn
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Example: login page is /login
        if (event.url === '/login') {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      }
    });
  }

}
