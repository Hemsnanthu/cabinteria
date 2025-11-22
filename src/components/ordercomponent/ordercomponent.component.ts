import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderStorageService } from '../../services/orderstorage.service';

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

  confi() {
    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
    alert("Thanks for Ordering");
  }
}
