import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteItemsPage } from './delete-items.page';

describe('DeleteItemsPage', () => {
  let component: DeleteItemsPage;
  let fixture: ComponentFixture<DeleteItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
