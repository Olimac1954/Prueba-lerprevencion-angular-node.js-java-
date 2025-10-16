import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) { 
    this.myAppUrl= environment.apiUrl;
    this.myApiUrl='api/usuarios/';
  }
  getUsers(): Observable<User[]>{//traer todos los usuarios
    return this.http.get<User[]>(this.myAppUrl+this.myApiUrl);
  }

  deleteUser(id: number): Observable<void> {//eliminar usuario
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  getUser(id: number): Observable<User> {//traer un usuario
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  saveUser(user: User): Observable<User> {//guardar usuario
    return this.http.post<User>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
  updateUser(id: number, user: User): Observable<void> {//actualizar usuario
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, user);
  }
}
