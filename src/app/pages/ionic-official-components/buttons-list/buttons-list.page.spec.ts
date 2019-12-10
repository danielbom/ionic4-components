import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonsListPage } from './buttons-list.page';

describe('ButtonsListPage', () => {
  let component: ButtonsListPage;
  let fixture: ComponentFixture<ButtonsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
