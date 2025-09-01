import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  // users: User[] = [];
  // userForm: FormGroup;
  // editMode = false;
  // currentUserId: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService,private route:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //   this.userForm = this.fb.group({
  //     name: ['', Validators.required],
  //     gmail: ['', [Validators.required, Validators.email]],
  //     department: ['', Validators.required],
  //     cabinNo: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // ngOnInit() {
  //   this.loadUsers();
  // }

  // // Load all users
  // loadUsers() {
  //   this.userService.displayusersfromdb().subscribe(res => {
  //     this.users = res;
  //   });
  // }

  // // Insert or Update
  // onSubmit() {
  //   if (this.userForm.valid) {
  //     if (this.editMode && this.currentUserId) {
  //       this.userService.updateUser(this.currentUserId, this.userForm.value).subscribe(() => {
  //         alert('✅ User updated');
  //         this.loadUsers();
  //         this.resetForm();
  //       });
  //     } else {
  //       this.userService.registerUser(this.userForm.value).subscribe(() => {
  //         alert('✅ User added');
  //         this.loadUsers();
  //         this.resetForm();
  //       });
  //     }
  //   }
  // }

  // // Edit user
  // editUser(user: User) {
  //   this.editMode = true;
  //   this.currentUserId = user.id!;
  //   this.userForm.patchValue(user);
  // }

  // // Delete user
  // deleteUser(id: number) {
  //   if (confirm('Are you sure to delete this user?')) {
  //     this.userService.deleteUser(id).subscribe(() => {
  //       alert('🗑️ User deleted');
  //       this.loadUsers();
  //     });
  //   }
  // }

  // // Reset form
  // resetForm() {
  //   this.editMode = false;
  //   this.currentUserId = null;
  //   this.userForm.reset();
  // }
  viewusers(){
    this.route.navigate(['/userfromdb']);
  }
}
