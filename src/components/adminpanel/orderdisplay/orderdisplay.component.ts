import { Component } from '@angular/core';
import { FoodOrderService } from '../../../services/order.service';

@Component({
  selector: 'app-orderdisplay',
  standalone: true,
  imports: [],
  templateUrl: './orderdisplay.component.html',
  styleUrl: './orderdisplay.component.css'
})
export class OrderdisplayComponent {

  constructor(private orderservice:FoodOrderService){}

  ngOninit(){
    this.loadUsers();
  }
  loadUsers() {
    this.orderservice.getOrders().subscribe(res => {
      // this.users = res;
      console.log(res);
      
    });
  }

}
