import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyadsPage } from './myads.page';

describe('MyadsPage', () => {
  let component: MyadsPage;
  let fixture: ComponentFixture<MyadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
