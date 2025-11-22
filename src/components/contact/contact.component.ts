import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };


  

  

  sendToWhatsApp() {
    const phoneNumber = '8122447259'; // 🔹 Replace with your WhatsApp number (with country code, no + or spaces)
    const text = `Hello, my name is ${this.contactData.name}.
Email: ${this.contactData.email}
Message: ${this.contactData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank'); // Opens WhatsApp chat
  }
  
}