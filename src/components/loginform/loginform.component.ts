import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.services';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [
    ReactiveFormsModule, // ✅ REQUIRED
    FormsModule // (optional)
    ,CommonModule,RouterModule,
    HeaderComponent,
    FooterComponent,RegisterComponent
],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {

  Userlogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginServices: LoginService
  ) {}

  ngOnInit(): void {
    this.Userlogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logincontrol(): void {
    if (this.Userlogin.invalid) {
      alert('Please fill all fields');
      return;
    }

    this.loginServices.login(this.Userlogin.value).subscribe({
      next: () => {
        alert('Login Successful');
        this.router.navigate(['/foodorder']);
      },
      error: () => {
        alert('Invalid Username or Password');
      }
    });
  }
}
