import { Component } from '@angular/core';
import { AdminpanelComponent } from "../adminpanel/adminpanel.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


adminform!:FormGroup
  validcheck:boolean=true;

  private adminusername:string="admin";
  private adminpassword:string="mavn";

  constructor(private fba: FormBuilder,private router:Router){}

  ngOnInit(){
    this.adminform=this.fba.group({
       adminusername:["",Validators.required],
      adminpassword:["",Validators.required]
    })
}
adminlogin() {
  const inputUsername = this.adminform.value.adminusername;
  const inputPassword = this.adminform.value.adminpassword;

  if (inputUsername === this.adminusername && inputPassword === this.adminpassword) {
    alert("Admin Successfully Logged IN!");
    this.router.navigate(['/adminpanel']);   // ✅ Now this will load AdminpanelComponent
  } else {
    this.validcheck = false;
    alert("Unauthorized Access!");
    this.adminform.reset();
  }
}

}
