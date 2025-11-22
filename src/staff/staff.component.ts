import { Component } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [NgFor],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
   staffList: any[] = [];

  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.loadStaff();
  }

  loadStaff() {
    this.staffService.getAllStaff().subscribe(data => {
      this.staffList = data;
    });
  }

  addStaff() {
    const newStaff = { name: 'John', email: 'john@college.edu', password: '1234', cabinNo: 'C12', role: 'Professor' };
    this.staffService.addStaff(newStaff).subscribe(() => this.loadStaff());
  }

}


