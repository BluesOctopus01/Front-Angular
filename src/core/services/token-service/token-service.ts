import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isTokenExpired(){
    const token = localStorage.getItem('token');
    if(token){
      const decodedToken : any = jwt.jwtDecode(token)

      return decodedToken.exp < Date.now() / 1000;
    }return true;
  }

  getRole(){
    const token = localStorage.getItem('token');
    if(token){
      const decodedToken : any = jwt.jwtDecode(token)
    return decodedToken.role;
    }
    return null
  }
  getUserId(){
    const token = localStorage.getItem("token");
    if(token){
      const decodedToken : any = jwt.jwtDecode(token)
      return decodedToken.user_id
    }
    return null;
  }

  getToken(){
    return localStorage.getItem("token");
  }















}
