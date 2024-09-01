import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { IUser } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
      ],
    });

    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return userValue as null if no user in localStorage', () => {
    localStorage.removeItem('user');
    expect(service.userValue).toBeNull();
  });

  it('login should authenticate user and store in localStorage', () => {
    const mockUser: IUser = { id: 1, username: 'testuser', token: 'abcd1234' };
    const username = 'testuser';
    const password = 'testpassword';

    service.login(username, password).subscribe(user => {
      expect(user).toEqual(mockUser);
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(mockUser));
      expect(service.userValue).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users/authenticate`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username, password });

    req.flush(mockUser);
  });
});
