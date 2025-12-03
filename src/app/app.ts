import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/shared/navbar-component/navbar-component";
import { FooterComponent } from "../components/shared/footer-component/footer-component";
import { AuthService } from '../core/services/auth-service/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Balto-Front');
  constructor(private authService: AuthService) {
    // Permet de charger le storage a chaque fois
  
    this.authService.loadFromStorage();
}
}