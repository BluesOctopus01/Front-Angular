import { Routes } from '@angular/router';
import { HomePage } from '../components/pages/home-page/home-page';
import { RegisterUser } from '../components/pages/auth-pages/register-user/register-user';
import { LoginUser } from '../components/pages/auth-pages/login-user/login-user';

export const routes: Routes = [
    // Homepage by default
    {path:'home-page', component: HomePage},
    // User route 
    {path : 'register' , component : RegisterUser},
    {path : 'login' , component : LoginUser},
    // Tags route

    // Deck route 
    // Card route

    // Session route

    // Admin route

];
