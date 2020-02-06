import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  update: boolean;
  title: string;

  form = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl()
  });

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.title = "New User";
    this.update = false;

    this.route.paramMap.subscribe(params => {
      const userId = +params.get("id");
      if (userId) {
        this.update = true;
        this.title = "Edit User";
        this.userService.getUser(userId).subscribe(user => {
          this.form.patchValue({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
          });
        });
      }
    });
  }

  saveUser() {
    this.user = this.form.value;

    if (!this.update) {
      this.userService.createUser(this.user).subscribe();
    } else {
      this.userService.updateUser(this.user).subscribe();
    }
  }

}
