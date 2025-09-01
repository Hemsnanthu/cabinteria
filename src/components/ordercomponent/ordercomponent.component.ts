import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ordercomponent',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './ordercomponent.component.html',
  styleUrl: './ordercomponent.component.css'
})
export class OrdercomponentComponent {
  items: any[] = [];
  total: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { items: any[] };
    
    if (state?.items) {
      this.items = state.items;
      this.total = this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    }
  }


}
