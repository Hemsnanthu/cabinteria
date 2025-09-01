import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  gmail: string;
  department: string;
  cabinNo: string;
  password: string;
  confirmpassword?: string;
}

const apiUrl = 'http://localhost:8080/api';  // ✅ Base URL

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private http: HttpClient) {}
 
  // 🔹 User Login
  loginUser(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/login`, data);
  }

  // 🔹 Register User
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/users`, user);
  }

  // 🔹 Get All Users
  displayusersfromdb(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/users/getusers`);
  }

  // 🔹 Update User
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${apiUrl}/users/${id}`, user);
  }

  // 🔹 Delete User
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/users/${id}`);
  }
}
