import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth-service/auth-service';

@Component({
  selector: 'login',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.css',
})
export class LoginUser {
LoginForm:FormGroup;

private readonly authService = inject(AuthService);
private readonly fb = inject(FormBuilder)

constructor(){
  this.LoginForm = this.fb.group({
    email : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })
}

login(){
  if(this.LoginForm.valid){
    this.authService.login(this.LoginForm.value)
  }
}

}
