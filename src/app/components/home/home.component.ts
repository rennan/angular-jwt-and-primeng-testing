import { Component, OnInit } from '@angular/core';
import {
  IUser,
  IUserResponse,
  IUserResponseData,
} from '../../shared/interfaces/user.interface';
import { first, Observable } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  users: IUserResponseData[] = [];

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.isLoading = true;
    this.userService
      .getUsers()
      .pipe(first())
      .subscribe((users) => {
        this.isLoading = false;
        this.users = users.data;
      });
  }
}
