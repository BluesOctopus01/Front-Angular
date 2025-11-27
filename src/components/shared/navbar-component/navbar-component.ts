import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-navbar-component',
  // imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  isLoggedNavbar = signal<boolean>(false);
  isAdminNavbar = signal<boolean>(false);
  private readonly authService = inject(AuthService);

  constructor(){
    this.isLoggedNavbar = this.authService.IsLogged;
    this.isAdminNavbar = this.authService.IsAdmin;
  }

  logout(){
    this.authService.logout();
  }
}
