import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LoginFormComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {

}
