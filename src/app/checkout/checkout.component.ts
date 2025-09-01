import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items: any[] = [];
  grandTotal: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.items = nav?.extras.state?.['items'] || [];
    this.calculateTotal();
  }

  calculateTotal() {
    this.grandTotal = this.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }
}
