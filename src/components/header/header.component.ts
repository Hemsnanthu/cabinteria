import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CheckoutComponent } from '../../app/checkout/checkout.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,HomeComponent,LoginComponent,AboutComponent,CheckoutComponent,ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
