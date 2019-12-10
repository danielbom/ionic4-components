import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardSocialPage } from './card-social.page';

describe('CardSocialPage', () => {
  let component: CardSocialPage;
  let fixture: ComponentFixture<CardSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
