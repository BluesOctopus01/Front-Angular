import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TagService } from '../../../../../../core/services/tag-service/tag-service';
import { Router } from '@angular/router';
import { TagCreateModel } from '../../../../../../models/tag-model';

@Component({
  selector: 'app-tag-create',
  imports: [    
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './tag-create.html',
  styleUrl: './tag-create.css',
})
export class TagCreate {

  newTagForm : FormGroup

  private readonly fb = inject(FormBuilder)
  private readonly tagService = inject(TagService)
  private readonly router = inject(Router)

  constructor(){
    this.newTagForm = this.fb.group({
      name : ['',[Validators.required]],
      description : ['',[Validators.required]]
    })
  }
  addTag(){
    if(this.newTagForm.valid){

    const newTag : TagCreateModel = {
      name : this.newTagForm.value.name,
      description : this.newTagForm.value.description,

    }
  
    this.tagService.addTag(newTag).subscribe({
      next : (response) =>{
        this.router.navigate(['/tags']);
      },
      error : (error) =>{
        console.error('Error creating todo:', error);
      }
    })
  
  }
  }
}
