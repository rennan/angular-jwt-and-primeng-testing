import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

class MockActivatedRoute {
  parent = {
    snapshot: { data: { title: '' } },
    routeConfig: { children: { filter: () => {} } },
  };
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpClient: HttpTestingController;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      providers: [
        MessageService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    httpClient = TestBed.inject(HttpTestingController);
    messageService = TestBed.inject(MessageService);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpClient.verify();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
