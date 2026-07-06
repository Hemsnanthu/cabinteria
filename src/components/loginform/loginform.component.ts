import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logincontrol(): void {
    if (this.loginForm.invalid) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;

    this.userService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;

        // ✅ Save user
        this.userService.setUser(res);

        // Navigate
        this.router.navigate(['/foodorder']);
      },
      error: () => {
        this.loading = false;
        alert('Invalid Username or Password');
      }
    });
  }
}