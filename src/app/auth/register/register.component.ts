import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { Register } from '../../_models/register';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model: Register = {
    nameSurname: '',
    email: '',
    password: ''
  };

  confirmPassword = '';

  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(): void {

    this.errorMessage = '';

    if (
      !this.model.nameSurname ||
      !this.model.email ||
      !this.model.password
    ) {
      this.errorMessage = 'Lütfen tüm zorunlu alanları doldurun.';
      return;
    }

    if (this.model.password.length < 6) {
      this.errorMessage = 'Şifre en az 6 karakter olmalıdır.';
      return;
    }

    if (this.model.password !== this.confirmPassword) {
      this.errorMessage = 'Şifreler birbiriyle eşleşmiyor.';
      return;
    }

    this.isLoading = true;

    this.authService.register(this.model).subscribe({
      next: () => {
        this.isLoading = false;

        this.router.navigate(['/login'], {
          queryParams: {
            registered: 'true'
          }
        });
      },

      error: (error) => {
        this.isLoading = false;

        this.errorMessage =
          error.error?.message ??
          'Kayıt oluşturulurken bir hata oluştu.';
      }
    });
  }
}
