import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  /** Vérifie si un token est valide (3 parties) */
  private isValidJWT(token: string | null): boolean {
    return !!token && token.split('.').length === 3;
  }

  /** Retourne le token ou null */
  getToken(): string | null {
    const token = localStorage.getItem('token');
    return this.isValidJWT(token) ? token : null;
  } 

  /** Retourne le rôle de l’utilisateur ou null */
  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwt.jwtDecode(token);
    return decoded.role ?? null;
  }

  /** Retourne l’ID utilisateur ou null */
  getUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwt.jwtDecode(token);
    return decoded.user_id ?? null;
  }

  /** Vérifie si le token est expiré */
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    const decoded: any = jwt.jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  }
}
