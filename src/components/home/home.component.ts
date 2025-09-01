import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent {
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
