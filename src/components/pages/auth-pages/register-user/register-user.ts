import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth-service/auth-service';
import { RegisterForm } from '../../../../models/register-models';


@Component({
  selector: 'app-register-user',
  imports: [],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {
registerForm : FormGroup;

private readonly fb = inject(FormBuilder)
private readonly authService = inject(AuthService)

constructor(){
  this.registerForm = this.fb.group({
    username : ["",[Validators.required]],
    first_name : ["",[Validators.required]],
    last_name : ["",[Validators.required]],
    password : ["",[Validators.required]],
    email : ["",[Validators.required]],
    gender : ["",[Validators.required]],
    phone_number : ["",[Validators.required]],
    birthdate : ["",[Validators.required]],
    country : ["",[Validators.required]],
    address : ["",[Validators.required]],
    user_bio : [""],
    image : [""]
  })

}


register(){
  if( this.registerForm.valid){
    
    this.authService.register(this.registerForm.value);
  }}









}
