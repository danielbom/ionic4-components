import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsListPage } from './settings-list.page';

describe('SettingsListPage', () => {
  let component: SettingsListPage;
  let fixture: ComponentFixture<SettingsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
