import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('http://localhost:8080/zev/users/');
  }

  deleteUser(id: number){
    return this.http.delete(`http://localhost:8080/zev/users/${id}`);
  }

  public createUser(user: User) {
    return this.http.post<User>("http://localhost:8080/zev/users/", user);
  }
}
