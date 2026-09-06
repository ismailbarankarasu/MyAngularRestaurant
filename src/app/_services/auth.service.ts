import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Register } from '../_models/register';
import { Login } from '../_models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7173/api/Users';

  constructor(private http: HttpClient) { }

  register(model: Register): Observable<User> {
    return this.http.post<User>(
      `${this.apiUrl}/Register`,
      model
    );
  }

  login(model: Login): Observable<User> {
    return this.http.post<User>(
      `${this.apiUrl}/Login`,
      model
    );
  }

  saveUser(user: User): void {
    localStorage.setItem(
      'restaurantUser',
      JSON.stringify(user)
    );
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('restaurantUser');

    if (!user) {
      return null;
    }

    return JSON.parse(user) as User;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  logout(): void {
    localStorage.removeItem('restaurantUser');
  }
}
