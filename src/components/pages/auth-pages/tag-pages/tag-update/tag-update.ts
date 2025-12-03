import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TagService } from '../../../../../core/services/tag-service/tag-service';
import { ActivatedRoute, Router } from '@angular/router';
import { TagCreateModel } from '../../../../../models/tag-model';

@Component({
  selector: 'TagUpdate',
  imports: [    
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './tag-update.html',
  styleUrl: './tag-update.css',
})
export class TagUpdate {
  updateTagForm!: FormGroup;
  tagId!: number;

  private readonly fb = inject(FormBuilder);
  private readonly TagService = inject(TagService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor(){
    this.updateTagForm = this.fb.group({
      name : ['',[Validators.required]],
      description : ['',[Validators.required]]
    })
    this.tagId = +this.route.snapshot.params['id'];

    this.getTagById();
  }
  getTagById(){
    if(this.tagId){
      this.TagService.getTagById(this.tagId).subscribe({
        next : (response) => {
          this.updateTagForm.patchValue(response)
        },
      })
    }
  }
  updateTodo(){
    if(this.tagId){
      const updateTag : TagCreateModel = {
        name : this.updateTagForm.value.name,
        description : this.updateTagForm.value.description
      } 
      this.TagService.updateTag(this.tagId, updateTag).subscribe({
        next : (reponse) =>{
          console.log(reponse)
          this.router.navigate(['/tags'])
        },
        error : (error) => {
          console.error(error)
        }
      })
    }
  }
}
