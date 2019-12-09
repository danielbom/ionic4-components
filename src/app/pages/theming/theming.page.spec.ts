import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThemingPage } from './theming.page';

describe('ThemingPage', () => {
  let component: ThemingPage;
  let fixture: ComponentFixture<ThemingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
