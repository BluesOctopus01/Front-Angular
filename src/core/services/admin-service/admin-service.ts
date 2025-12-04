import { inject, Injectable } from '@angular/core';
import { TokenService } from '../token-service/token-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SummuryUser, User } from '../../../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private urlUsers = 'http://localhost:5000/users/admin'
  private urlDecks = 'http://localhost:5000/users/decks/admin'
  private urlSessions = 'http://localhost:5000/sessions/admin'

  private readonly tokenService = inject(TokenService);
  private readonly http = inject(HttpClient)

  private getAuthHeaders() {
    const token = this.tokenService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getUsers(){
    return this.http.get<SummuryUser[]>(this.urlUsers, {
      headers: this.getAuthHeaders(),
    });
  }
  deleteUser(id: number) {
    return this.http.delete(this.urlUsers + `/delete/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
  getDecks(){

  }
  getSessions(){

  }


}