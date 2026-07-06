import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  department: string;
  cabinNo: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteUser: any;
  // 🔹 Update user
updateUser(id: number, user: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
}

  private apiUrl = 'http://localhost:8080/api';
  private USER_KEY = 'cabinteria_user';

  constructor(private http: HttpClient) {}

  // 🔹 Login
login(data: any) {
  return this.http.post<User>(`${this.apiUrl}/users/login`, data);
}

  // 🔹 Register
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  // 🔹 Get all users ✅
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users/getusers`);
  }

  // 🔹 Save logged-in user
  setUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // 🔹 Get logged-in user
  getUser(): User | null {
    const data = localStorage.getItem(this.USER_KEY);
    return data ? JSON.parse(data) : null;
  }

  // 🔹 Logout
  logout() {
    localStorage.removeItem(this.USER_KEY);
  }
}