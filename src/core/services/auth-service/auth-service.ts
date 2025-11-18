import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token-service/token-service';
import { RegisterForm } from '../../../models/register-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private registerUrl = 'http://127.0.0.1:5000/users';

  IsLogged = signal<boolean>(false)
  IsAdmin = signal<boolean>(false)

  private readonly http = inject(HttpClient);
  private router = inject(Router);
  private readonly tokenService = inject(TokenService);

  constructor(){
    if (localStorage.getItem('token')){
      this.IsLogged.set(true);
    }

    if(this.tokenService.getRole()==='admin'){
      this.IsAdmin.set(true)
    }
  }

  register(registerFrom : RegisterForm){
    this.http.post<{token : string}>(this.registerUrl, registerFrom).subscribe({
      next : (response) =>{
        console.log(response);

      localStorage.setItem("token", response.token)
      }
    })
  }
  login(){

  }
  logout(){

  }









}
