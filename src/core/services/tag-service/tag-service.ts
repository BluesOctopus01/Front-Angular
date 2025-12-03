import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tag, TagCreateModel } from '../../../models/tag-model';
import { TokenService } from '../token-service/token-service';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private url = 'http://localhost:5000/tags/'
  private readonly tokenService = inject(TokenService);
  private readonly http = inject(HttpClient)

  //permet d'éviter de se répéter dans tout les service
  private getAuthHeaders() {
    const token = this.tokenService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  addTag(tagForm: TagCreateModel) {
    return this.http.post<Tag>(this.url, tagForm, {
      headers: this.getAuthHeaders(),
    });
  }
  getTags(){
    return this.http.get<Tag[]>(this.url)
  }
  getTagById(id: number) {
    return this.http.get<Tag>(this.url + id);
  }

  deleteTag(id: number) {
    return this.http.delete(this.url + id, {
      headers: this.getAuthHeaders(),
    });
  }
  updateTag(id: number, updated: Partial<Tag>) {
    return this.http.patch<Tag>(this.url + id, updated, {
      headers: this.getAuthHeaders(),
    });
  }

}
