import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderStorageService } from '../../services/orderstorage.service';
import { UserService } from '../../services/user.service';
// import { OrderStorageService } from '../../services/orderstorage.service';


@Component({
  selector: 'app-ordercomponent',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './ordercomponent.component.html',
  styleUrl: './ordercomponent.component.css'
})
export class OrdercomponentComponent implements OnInit {

  items: any[] = [];
  total: number = 0;
  showAlert = false;
  orderService: any;
  userService: any;

  constructor(private orderStorage: OrderStorageService) {}


  ngOnInit() {
    // Load items saved from checkout
    this.items = this.orderStorage.getOrder();

    // Calculate total
    this.total = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0
    );
  }
  goBack() {
    window.history.back();
  }
  cabin = '';
tableNumber: number | null = null;
paymentMethod = '';
loading = false;

orderId = '';
orderTime = '';

cabins = ['A', 'B', 'C', 'VIP'];

confi() {
  if (!this.cabin || !this.tableNumber || !this.paymentMethod) {
    alert("Please fill all details!");
    return;
  }

  this.loading = true;

  // ✅ PASTE HERE
  const user = this.userService.getUser();  

  const orderData = {
    items: this.items,
    cabin: this.cabin,
    tableNumber: this.tableNumber,
    paymentMethod: this.paymentMethod,
    userName: user?.name
  };

  // 🔻 API call
  this.orderService.createOrder(orderData).subscribe({
    next: (res: any) => {
      this.loading = false;

      this.orderId = res.orderId;
      this.orderTime = res.orderTime;

      this.orderStorage.clearOrder();
      this.showAlert = true;
    },
    error: () => {
      this.loading = false;
      alert("Order failed!");
    }
  });
}

  closeAlert() {
    this.showAlert = false;
    alert("Thanks for Ordering");
  }
}
