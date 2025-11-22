import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, RouterLink, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registrationform: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationform = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      gmail: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      cabinNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    });
  }

  // Submit registration data
 // home.component.ts
registrationfun() {
  if (this.registrationform.valid) {
    this.userService.registerUser(this.registrationform.value).subscribe({
      next: res => {
        console.log('User registered:', res);
        alert('Registration Successful!');
        this.registrationform.reset();
      },
      error: err => {
        console.error('Error:', err);
        alert('Registration failed!');
      }
    });
  } else {
    this.registrationform.markAllAsTouched();
  }
}

}

