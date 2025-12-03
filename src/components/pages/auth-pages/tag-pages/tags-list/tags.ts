import { Component, inject } from '@angular/core';
import { Tag } from '../../../../../models/tag-model';
import { TagService } from '../../../../../core/services/tag-service/tag-service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth-service/auth-service';

@Component({
  selector: 'tags',
  imports: [RouterModule],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags {
  tags : Tag[] = []

  private readonly tagService = inject(TagService)
  private readonly router = inject(Router)
  private readonly authService = inject(AuthService);

  isLogged = this.authService.IsLogged;
  isAdmin = this.authService.IsAdmin;
constructor() {
  this.getTags();
}
  getTags(){
    this.tagService.getTags().subscribe({
      next: (response) =>{
        this.tags = response.reverse()
        //reverse permet de mettre la liste dans le bon sens (1, 2, 3, etc)
      },
      error:(error) =>{
        console.error('Error Fetching tags', error)
      }
    })
  }
  deleteTag(id: number) {
    this.tagService.deleteTag(id).subscribe(() => {
      this.getTags();
    });
  }

  // updateTag(id: number) {
  //   // tu feras un formulaire comme pour create
  //   // ici je redirige simplement
  //   console.log("update tag", id);
  // }

}
