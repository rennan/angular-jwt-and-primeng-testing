import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { UserService } from '../../shared/services/user.service';
import { PrimengModule } from '../../shared/modules/primeng.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClient: HttpTestingController;
  let userService: UserService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, PrimengModule],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(HomeComponent);
    httpClient = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UserService);
    messageService = TestBed.inject(MessageService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
