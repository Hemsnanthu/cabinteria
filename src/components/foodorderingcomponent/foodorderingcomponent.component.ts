import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FoodService, FoodItem } from '../../services/food.service';
import { FoodOrderService, FoodOrder } from '../../services/order.service';

@Component({
  selector: 'app-foodorderingcomponent',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './foodorderingcomponent.component.html',
  styleUrls: ['./foodorderingcomponent.component.css']
})
export class FoodorderingcomponentComponent implements OnInit {
  foods: FoodItem[] = [];

  constructor(
    private router: Router,
    private foodService: FoodService,
    private orderService: FoodOrderService
  ) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getFoods().subscribe({
      next: (data) => {
        // Initialize quantity to 0 for each item
        this.foods = data.map(item => ({ ...item, quantity: 0 }));
      },
      error: (err) => console.error('Error fetching foods', err)
    });
  }

  increaseQty(item: FoodItem) {
    item.quantity++;
  }

  decreaseQty(item: FoodItem) {
    if (item.quantity > 0) item.quantity--;
  }

  getSelectedItems(): FoodItem[] {
    return this.foods.filter(item => item.quantity > 0);
  }

  getTotal(): number {
    return this.getSelectedItems().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    const selectedItems = this.getSelectedItems();

    if (selectedItems.length === 0) {
      alert('Please select at least one item to checkout.');
      return;
    }

    selectedItems.forEach(item => {
      const order: FoodOrder = {
        foodname: item.name,
        quantity: item.quantity,
        price: item.price,
        cabinnumber: 1
      };


      
      this.orderService.createOrder(order).subscribe({
        next: (res) => console.log('Order placed', res),
        error: (err) => console.error('Error placing order', err)
      });
    });

    this.router.navigate(['/order'], { state: { items: selectedItems } });
  }
}
