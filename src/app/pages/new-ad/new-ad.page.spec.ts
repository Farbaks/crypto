import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAdPage } from './new-ad.page';

describe('NewAdPage', () => {
  let component: NewAdPage;
  let fixture: ComponentFixture<NewAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
