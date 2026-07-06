import { Injectable } from '@angular/core';
import { FoodItem } from './food.service';

@Injectable({
  providedIn: 'root'
})
export class OrderStorageService {

  private STORAGE_KEY = 'cabinteria_order';

  // Save order
  setOrder(items: FoodItem[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }

  // Get order
  getOrder(): FoodItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Clear order after success
  clearOrder() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}