import { Component, inject } from '@angular/core';
import { SummuryUser, User } from '../../../../../models/user-model';
import { AdminService } from '../../../../../core/services/admin-service/admin-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth-service/auth-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'AdminUsers',
  imports: [CommonModule],
  templateUrl: './admin-user.html',
  styleUrl: './admin-user.css',
})
export class AdminUsers {
  users : SummuryUser[] = []

  private readonly adminService = inject(AdminService)
  private readonly router = inject(Router)
  private readonly authService = inject(AuthService)

  isLogged = this.authService.IsLogged;
  isAdmin = this.authService.IsAdmin;

constructor() {
  this.getUsersAdmin();
}
getUsersAdmin(){
  this.adminService.getUsers().subscribe({
    next : (response) =>{
      this.users = response
      console.log(response)
    },
    error :(error) => {
      console.error('Error fetching users', error)
    }
  })
}
deleteUser(id:number){
  this.adminService.deleteUser(id).subscribe(()=>{
    this.getUsersAdmin();
  })
}








}
