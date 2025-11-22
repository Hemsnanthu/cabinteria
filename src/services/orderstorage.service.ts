import { Injectable } from '@angular/core';
import { FoodItem } from './food.service';

@Injectable({
  providedIn: 'root'
})
export class OrderStorageService {
  private latestOrder: FoodItem[] = [];

  setOrder(items: FoodItem[]) {
    this.latestOrder = items;
  }

  getOrder(): FoodItem[] {
    return this.latestOrder;
  }
}
