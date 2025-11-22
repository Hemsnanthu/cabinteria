import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

 login(user: any) {
  return this.http.get(
    `http://localhost:8080/api/auth/login`,
    {
      params: {
        username: user.username,
        password: user.password
      },
      responseType: 'text'
    }
  );
}


}
