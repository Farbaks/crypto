import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositPage } from './deposit.page';

describe('DepositPage', () => {
  let component: DepositPage;
  let fixture: ComponentFixture<DepositPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
