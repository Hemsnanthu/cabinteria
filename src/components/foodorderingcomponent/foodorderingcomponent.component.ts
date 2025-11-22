import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FoodService, FoodItem } from '../../services/food.service';
import { FoodOrderService, FoodOrder } from '../../services/order.service';
import { CheckoutComponent } from '../../app/checkout/checkout.component';
import { OrderStorageService } from '../../services/orderstorage.service';


@Component({
  selector: 'app-foodorderingcomponent',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule,CheckoutComponent],
  templateUrl: './foodorderingcomponent.component.html',
  styleUrls: ['./foodorderingcomponent.component.css']
})
export class FoodorderingcomponentComponent implements OnInit {

  foods: FoodItem[] = [];
  dropdownOpen: boolean = false;

  loggedInUser = "Nanthakumar";

  
  notificationOpen = false;
  constructor(
    private router: Router,
    private foodService: FoodService,
    private orderService: FoodOrderService,
    private orderStorageService: OrderStorageService 
  ) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  goToCheckout() {
  this.router.navigate(['/order']);
}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

 

notifications = [
  { title: "Order placed successfully!", time: "Just now" },
  { title: "New food items added!", time: "10 minutes ago" },
];

toggleNotification() {
  this.notificationOpen = !this.notificationOpen;
}

addNotification(msg: string) {
  this.notifications.push({
    title: msg,
    time: "Just now"
  });
}


  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getFoods().subscribe({
      next: (data) => {
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

  // checkout() {
  //   const selectedItems = this.getSelectedItems();

  //   if (selectedItems.length === 0) {
  //     alert('Please select at least one item to checkout.');
  //     return;
  //   }

  //   selectedItems.forEach(item => {
  //     const order: FoodOrder = {
  //       foodname: item.name,
  //       quantity: item.quantity,
  //       price: item.price,
  //       cabinnumber: 1
  //     };

  //     this.orderService.createOrder(order).subscribe({
  //       next: (res) => console.log('Order placed', res),
  //       error: (err) => console.error('Error placing order', err)
  //     });
  //   });

  //   // this.router.navigate(['/order'], { state: { items: selectedItems } });
  // }
  checkout() {
  const selectedItems = this.getSelectedItems();

  if (selectedItems.length === 0) {
    alert('Please select at least one item to checkout.');
    return;
  }

  // Save orders to database
  selectedItems.forEach(item => {
    const order = {
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

  // Store items locally for Order Summary page
  this.orderStorageService.setOrder(selectedItems);

  alert("Items added to Orders. Click 'Orders' in navbar to view.");
}

}
