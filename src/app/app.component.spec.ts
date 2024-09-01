import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthenticationService } from './shared/services/authentication.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let primeNgConfig: PrimeNGConfig;
  let authenticationService: AuthenticationService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(AppComponent);
    primeNgConfig = TestBed.inject(PrimeNGConfig);
    authenticationService = TestBed.inject(AuthenticationService);
    messageService = TestBed.inject(MessageService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
