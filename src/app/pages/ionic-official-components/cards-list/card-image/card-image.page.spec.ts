import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardImagePage } from './card-image.page';

describe('CardImagePage', () => {
  let component: CardImagePage;
  let fixture: ComponentFixture<CardImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
