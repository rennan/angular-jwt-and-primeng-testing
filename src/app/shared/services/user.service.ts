import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IUser, IUserResponse } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${environment.apiUrlUsers}`);
  }

  getUsersPromise(): Promise<IUserResponse | undefined> {
    // for testing purposes, toPromise() is deprecated
    // return firstValueFrom(this.http.get<IUserResponse | undefined>(`${environment.apiUrlUsers}`)));
    return this.http.get<IUserResponse | undefined>(`${environment.apiUrlUsers}`).toPromise();
  }
}
