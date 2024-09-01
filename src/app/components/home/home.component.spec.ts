import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../shared/services/user.service';
import { getUsersResponseMock } from '../../shared/mocks/users.mock';
import { PrimengModule } from '../../shared/modules/primeng.module';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, PrimengModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    userService = TestBed.inject(UserService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have users', () => {
    expect(component.users.length).toEqual(0);
    spyOn(userService, 'getUsers').and.returnValue(of(getUsersResponseMock));
    component.users = getUsersResponseMock.data;
    fixture.detectChanges();
    expect(component.users.length).toBeGreaterThan(0);
  });
});
