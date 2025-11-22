import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  
   private apiUrl = 'http://localhost:8080/api/staff';

  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addStaff(staff: any): Observable<any> {
    return this.http.post(this.apiUrl, staff);
  }
}


