import { Component } from '@angular/core';
import { LoginFormComponent } from '../loginform/loginform.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
