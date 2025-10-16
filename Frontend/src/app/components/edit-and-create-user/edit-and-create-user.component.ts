import { Component } from '@angular/core';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule} from "@angular/router";
import { User } from '../../interfaces/users';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-and-create-user',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './edit-and-create-user.component.html',
  styleUrl: './edit-and-create-user.component.css'
})
export class EditAndCreateUserComponent {
  form:FormGroup;
  id:number;
  operacion:string='Agregar';

  constructor(private fb:FormBuilder,private _UserService: UserService, private router:Router,private toastr:ToastrService, private aRoute:ActivatedRoute){ 
    this.form=this.fb.group({
      nombre:['',Validators.required],
      correo:['',[Validators.required, Validators.email]],
      edad:[null,Validators.required]
    })
    this.id= Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    if(this.id!=0){
      this.operacion='Editar';
      this.getUser(this.id);
    }}

  addUser(){// agregar ususario
    const user:User={
      nombre:this.form.value.nombre,
      correo:this.form.value.correo,
      edad:this.form.value.edad
  }
  if(this.id!=0){
    //editar
    user.id=this.id;
    this._UserService.updateUser(this.id,user).subscribe(data=>{
      this.form.reset();
      this.toastr.info('El usuario fue modificado con exito','Usuario modificado');
      this.router.navigate(['/']);
    })
    
  }else{
    //agregar
    this._UserService.saveUser(user).subscribe(data=>{
      console.log(data);
      this.form.reset();
      this.toastr.success('El usuario fue registrado con exito','Usuario registrado');
      this.router.navigate(['/']);
    })
    }
  }
  
  getUser(id:number){// obtener usuario y ponerlos en los inputs
    this._UserService.getUser(id).subscribe(data=>{
      console.log(data);
      this.form.setValue({
        nombre:data.nombre,
        correo:data.correo,
        edad:data.edad
      })
    })}

  

}
