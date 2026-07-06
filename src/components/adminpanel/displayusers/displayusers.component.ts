import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User, UserService } from '../../../services/user.service';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent implements OnInit {

  users: User[] = [];
  userForm: FormGroup;
  editMode = false;
  currentUserId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // ✅ FIXED
      department: ['', Validators.required],
      cabinNo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  // ✅ Load users
  loadUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  // ✅ Add / Update
  onSubmit() {
    if (this.userForm.valid) {

      if (this.editMode && this.currentUserId) {
        this.userService.updateUser(this.currentUserId, this.userForm.value);
        alert('✅ User updated');
        this.loadUsers();
        this.resetForm();

      } else {
        this.userService.register(this.userForm.value).subscribe(() => {
          alert('✅ User added');
          this.loadUsers();
          this.resetForm();
        });
      }
    }
  }

  // ✅ Edit
  editUser(user: User) {
    this.editMode = true;
    this.currentUserId = user.id!;
    this.userForm.patchValue(user);
  }

  // ✅ Delete
  deleteUser(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        alert('🗑️ User deleted');
        this.loadUsers();
      });
    }
  }

  // ✅ Reset
  resetForm() {
    this.editMode = false;
    this.currentUserId = null;
    this.userForm.reset();
  }
}