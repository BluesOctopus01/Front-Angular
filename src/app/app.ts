import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/shared/navbar-component/navbar-component";
import { FooterComponent } from "../components/shared/footer-component/footer-component";
import { HomePage } from "../components/pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Balto-Front');
}
