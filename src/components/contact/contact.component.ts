import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      alert(`Thank you ${this.contactData.name}, your message has been received!`);
      this.contactData = { name: '', email: '', message: '' };
    } else {
      alert('Please fill in all fields!');
    }
  }
}
