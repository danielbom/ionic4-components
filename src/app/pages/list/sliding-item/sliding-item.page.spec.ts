import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidingItemPage } from './sliding-item.page';

describe('SlidingItemPage', () => {
  let component: SlidingItemPage;
  let fixture: ComponentFixture<SlidingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
