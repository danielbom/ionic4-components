import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginInstagramPage } from './login-instagram.page';

describe('LoginInstagramPage', () => {
  let component: LoginInstagramPage;
  let fixture: ComponentFixture<LoginInstagramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInstagramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInstagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
