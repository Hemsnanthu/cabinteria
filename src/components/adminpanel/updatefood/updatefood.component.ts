import { Component, OnInit } from '@angular/core';
import { FoodItem, FoodService } from '../../../services/food.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { FoodService, FoodItem } from '../services/food.service';

@Component({
  selector: 'app-updatefood',
  standalone:true,
  templateUrl: './updatefood.component.html',
  imports:[FormsModule,CommonModule],
  styleUrls: ['./updatefood.component.css']
})
export class FoodComponent implements OnInit {
  foods: FoodItem[] = [
  { id: 1, name: 'Idli', price: 20, image: 'assets/images/idly.jpeg', quantity: 10 },
  { id: 2, name: 'Dosa', price: 40, image: 'assets/images/dosai.jpg', quantity: 5 }
];

  newFood: FoodItem = { name: '', price: 0, image: '', quantity: 0 };
  editFood: FoodItem = { id: 0, name: '', price: 0, image: '', quantity: 0 };

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
    });
  }

  addFood(): void {
    this.foodService.addFood(this.newFood).subscribe(() => {
      this.loadFoods();
      this.newFood = { name: '', price: 0, image: '', quantity: 0 };
    });
  }

  setEdit(food: FoodItem): void {
    this.editFood = { ...food };
  }

  updateFood(): void {
    if (this.editFood?.id) {
      this.foodService.updateFood(this.editFood.id, this.editFood).subscribe(() => {
        this.loadFoods();
        this.editFood = { id: 0, name: '', price: 0, image: '', quantity: 0 };
      });
    }
  }
  

  deleteFood(id: number): void {
    this.foodService.deleteFood(id).subscribe(() => {
      this.loadFoods();
    });
  }
}
