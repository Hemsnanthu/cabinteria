import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginFormComponent { 
  private usernamelogin:string="mavn";
  private passwordlogin:string="user";
  constructor(private router:Router,private fb:FormBuilder){
    
  }
  Userlogin!:FormGroup;
  ngOnInit(){
    this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required ]

    })
  }
  logincontrol(){
    // if(this.Userlogin.value.username==this.usernamelogin && this.Userlogin.value.password==this.passwordlogin){
    //   alert("Login Successfull");
      this.router.navigate(['/foodorder']);
    }
    // else{
    //   alert("Login Failed");
    // }
 

}
// checking(){
//   alert("hi");

// }

