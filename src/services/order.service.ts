import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FoodOrder {
  orderid?: number;
  foodname: string;
  quantity: number;
  price: number;
  cabinnumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  private apiUrl = 'http://localhost:8080'; // Spring Boot URL

  constructor(private http: HttpClient) { }

  // Get all orders
  getOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(this.apiUrl);
  }

  // Get order by ID
  getOrderById(id: number): Observable<FoodOrder> {
    return this.http.get<FoodOrder>(`${this.apiUrl}/${id}`);
  }

  // Create a new order
  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/orders/orderdetails`, order);
  }

  // Update an order
  updateOrder(id: number, order: FoodOrder): Observable<FoodOrder> {
    return this.http.put<FoodOrder>(`${this.apiUrl}/${id}`, order);
  }

  // Delete an order
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
