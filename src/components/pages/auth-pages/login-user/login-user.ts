import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-user.html',
  styleUrl: './login-user.css',
})
export class LoginUser {
LoginForm:FormGroup;

// private readonly authService = inject(AuthService);
private readonly fb = inject(FormBuilder)

constructor(){
  this.LoginForm = this.fb.group({
    
  })
}
}
