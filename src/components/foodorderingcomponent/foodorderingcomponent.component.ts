import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
interface FoodItem {
  name: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-foodorderingcomponent',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './foodorderingcomponent.component.html',
  styleUrl: './foodorderingcomponent.component.css'
})
export class FoodorderingcomponentComponent {
  constructor(private router:Router){}

   breakfast = [
    { name: 'Idli', price: 20, quantity: 0, image: 'assets/images/idly.jpeg' },
    { name: 'Dosa', price: 40, quantity: 0, image: 'assets/images/dosai.jpg' },
    { name: 'Chappathi', price: 30, quantity: 0, image: 'assets/images/chappatti.jpeg'},
    { name: 'Poori', price: 35, quantity: 0, image: 'assets/images/poori.jpeg' },
    { name: 'Idiyappam', price: 35, quantity: 0, image: 'assets/images/poori.jpeg' },
    { name: 'Pongal', price: 35, quantity: 0, image: 'assets/images/poori.jpeg' },
    
  ];

  lunchfoods = [
    { name: 'Meals', price: 80, quantity: 0, image: 'assets/images/meals.jpeg' },
    { name: 'Veg Fried Rice', price: 90, quantity: 0, image: 'assets/images/vegfrie.jpeg' },
    { name: 'Veg Noodles', price: 85, quantity: 0, image: 'assets/images/vegnoodles.jpeg' }
  ]
   

  increaseQty(item: FoodItem) {
    item.quantity++;
  }

  decreaseQty(item: FoodItem) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
   getSelectedItems() {
    return [...this.breakfast, ...this.lunchfoods].filter(item => item.quantity > 0);
  }

  getTotal() {
    return this.getSelectedItems()
      .reduce((total, item) => total + item.quantity * item.price, 0);
  }
  checkout() {
    const selectedItems = this.breakfast.filter(item => item.quantity > 0);
    this.router.navigate(['/order'], { state: { items: selectedItems } });
  }

}
