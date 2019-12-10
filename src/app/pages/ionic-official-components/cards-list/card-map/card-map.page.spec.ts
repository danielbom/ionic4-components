import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardMapPage } from './card-map.page';

describe('CardMapPage', () => {
  let component: CardMapPage;
  let fixture: ComponentFixture<CardMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
