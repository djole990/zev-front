import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor( private userService: UserService ) { }

  deleteUserById(id: number){
    this.userService.deleteUser(id).subscribe();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response =>{ 
        this.users = response
      }
    );
  }

}
