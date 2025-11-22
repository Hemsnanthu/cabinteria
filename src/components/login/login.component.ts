import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { LoginFormComponent } from '../loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
