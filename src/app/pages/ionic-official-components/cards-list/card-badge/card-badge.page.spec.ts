import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardBadgePage } from './card-badge.page';

describe('CardBadgePage', () => {
  let component: CardBadgePage;
  let fixture: ComponentFixture<CardBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBadgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
