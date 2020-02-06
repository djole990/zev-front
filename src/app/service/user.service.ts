import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: number){
    return this.http.get<User>(`http://localhost:8080/zev/users/${id}`)
  }

  getUsers(){
    return this.http.get<User[]>('http://localhost:8080/zev/users/');
  }

  deleteUser(id: number){
    return this.http.delete(`http://localhost:8080/zev/users/${id}`);
  }

  createUser(user: User){
    return this.http.post<User>('http://localhost:8080/zev/users/', user);
  }

  updateUser(user: User){
    return this.http.put<User>(`http://localhost:8080/zev/users/${user.id}`, user);
  }
}
