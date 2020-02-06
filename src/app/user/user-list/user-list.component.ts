import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor( private router: Router, private userService: UserService ) { }

  deleteUserById(id: number){
    this.userService.deleteUser(id).subscribe();
  }

  populateForm(userId: number) {
    this.router.navigate(["user", userId]);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response =>{ 
        this.users = response
      }
    );
  }

}
