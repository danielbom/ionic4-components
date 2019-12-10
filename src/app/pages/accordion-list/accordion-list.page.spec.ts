import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionListPage } from './accordion-list.page';

describe('AccordionListPage', () => {
  let component: AccordionListPage;
  let fixture: ComponentFixture<AccordionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
