import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FoodItem {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'http://localhost:8080/api/food'; // Update if your backend path differs

  constructor(private http: HttpClient) {}

  

  getFoods(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(this.apiUrl);
  }

  getFood(id: number): Observable<FoodItem> {
    return this.http.get<FoodItem>(`${this.apiUrl}/${id}`);
  }

  addFood(food: FoodItem): Observable<FoodItem> {
    return this.http.post<FoodItem>(this.apiUrl, food);
  }

  updateFood(id: number, food: FoodItem): Observable<FoodItem> {
    return this.http.put<FoodItem>(`${this.apiUrl}/${id}`, food);
  }

  deleteFood(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
