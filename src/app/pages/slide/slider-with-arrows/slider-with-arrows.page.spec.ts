import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderWithArrowsPage } from './slider-with-arrows.page';

describe('SliderWithArrowsPage', () => {
  let component: SliderWithArrowsPage;
  let fixture: ComponentFixture<SliderWithArrowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWithArrowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderWithArrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
