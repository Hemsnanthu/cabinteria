import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,LoginFormComponent,BodyComponent,LoginComponent,AboutComponent,ContactComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cabinteria';
}
