import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FoodComponent } from '../adminpanel/updatefood/updatefood.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HeaderComponent, FoodComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  teamMembers = [
  { name: 'Sudhir Kumar', role: 'Full Stack Developer', img: 'assets/images/sudhirim.jpg', link: '/sudhir' },
  { name: 'Nanthakumar', role: 'Frontend Developer', img: 'assets/images/IMG_4082.JPG', link: '/nantha' },
  { name: 'MohanSai', role: 'Database Engineer', img: 'assets/images/mohanim.jpg', link: '/mohan' },
  { name: 'Arun', role: 'Database Engineer', img: 'assets/images/arunim.jpg', link: '/arun' },
  { name: 'Viswa', role: 'Backend Developer', img: 'assets/images/viswa.jpg', link: '/viswa' }
];




}
