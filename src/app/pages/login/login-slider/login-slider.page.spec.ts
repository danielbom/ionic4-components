import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginSliderPage } from './login-slider.page';

describe('LoginSliderPage', () => {
  let component: LoginSliderPage;
  let fixture: ComponentFixture<LoginSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
