import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Login } from '../../_models/login';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model: Login = {
    email: '',
    password: ''
  };

  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {

    this.errorMessage = '';

    if (!this.model.email || !this.model.password) {
      this.errorMessage = 'E-posta ve şifre alanları zorunludur.';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.model).subscribe({
      next: (user) => {

        this.authService.saveUser(user);

        this.isLoading = false;

        this.router.navigate(['/admin']);
      },

      error: (error) => {

        this.isLoading = false;

        this.errorMessage =
          error.error?.message ??
          'Giriş yapılırken bir hata oluştu.';
      }
    });
  }
}
