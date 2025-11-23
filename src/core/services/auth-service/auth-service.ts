import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token-service/token-service';
import { RegisterForm } from '../../../models/register-models';
import { LoginForm } from '../../../models/login-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly baseUrl = 'http://127.0.0.1:5000/users';

  IsLogged = signal<boolean>(false);
  IsAdmin = signal<boolean>(false);

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly tokenService = inject(TokenService);

  constructor() {}

  /** Charge l’état depuis le token stocké (app start / refresh) */
  loadFromStorage(): void {
    const token = this.tokenService.getToken();
    const role = this.tokenService.getRole();

    this.IsLogged.set(!!token);
    this.IsAdmin.set(role === 'admin');
  }

  /** Register */
  register(registerForm: RegisterForm) {
    this.http.post<{ token: string }>(`${this.baseUrl}/register`, registerForm)
      .subscribe({
        next: (response) => {
          if (!response.token) return;
          localStorage.setItem('token', response.token);
          this.loadFromStorage(); // met à jour IsLogged / IsAdmin
          this.router.navigate(['/']);
        },
        error: (err) => console.error(err)
      });
  }

  /** Login */
  login(loginForm: LoginForm) {
    this.http.post<{ token: string }>(`${this.baseUrl}/login`, loginForm)
      .subscribe({
        next: (response) => {
          if (!response.token) return;
          localStorage.setItem('token', response.token);
          this.loadFromStorage(); // met à jour IsLogged / IsAdmin
          this.router.navigate(['/']);
        },
        error: (err) => console.error(err)
      });
  }

  /** Logout */
  logout() {
    localStorage.removeItem('token');
    this.IsLogged.set(false);
    this.IsAdmin.set(false);
    this.router.navigate(['/']);
  }
}
