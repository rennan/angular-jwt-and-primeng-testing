import { Component, OnInit } from '@angular/core';
import { IUserResponseData } from '../../shared/interfaces/user.interface';
import { finalize, take } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  hasError = false;
  users: IUserResponseData[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit() {
    this.getUsers();
    // this.getUsersToPromise();
  }

  /**
   * Fetch users using observable
   */
  private getUsers(): void {
    this.isLoading = true;
    this.userService
      .getUsers()
      .pipe(
        take(1),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (users) => {
          this.users = users.data;
        },
        error: () => {
          this.hasError = true;
          this.addErrorMessage();
        },
      })
  }

  /**
   * Fetch users using promise
   */
  private getUsersToPromise(): void {
    this.isLoading = true;
    this.userService
      .getUsersPromise()
      .then((users) => {
        this.isLoading = false;
        this.users = users!.data;
      })
      .catch(() => {
        this.isLoading = false;
        this.addErrorMessage();
      });
  }

  /**
   * Helper method to add error message
   */
  private addErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error!',
      detail: 'Error fetching users. Please try again later.',
    });
  }
}
