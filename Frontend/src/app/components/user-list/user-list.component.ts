import { Component,OnInit } from '@angular/core';
import { User } from '../../interfaces/users';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { UserService } from '../../services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 listUsers: User[] = []

 constructor(private _UserService: UserService,private toastr:ToastrService){ }
ngOnInit(): void {
  this.getListUsers();
}

 getListUsers(){
   this._UserService.getUsers().subscribe(data=>{
     this.listUsers=data;
     console.log(data);
   }, error=>{
     console.log(error);
   })}

  deleteUser(id:number){
    this._UserService.deleteUser(id).subscribe(data=>{
      this.getListUsers();
      this.toastr.warning('El usuario fue eliminado con exito','Usuario eliminado');  
    }, error=>{
      console.log(error);
    })
  }
}
