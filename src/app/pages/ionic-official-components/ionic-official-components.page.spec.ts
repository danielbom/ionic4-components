import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicOfficialComponentsPage } from './ionic-official-components.page';

describe('IonicOfficialComponentsPage', () => {
  let component: IonicOfficialComponentsPage;
  let fixture: ComponentFixture<IonicOfficialComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicOfficialComponentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicOfficialComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
