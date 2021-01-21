import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinPage } from './coin.page';

describe('CoinPage', () => {
  let component: CoinPage;
  let fixture: ComponentFixture<CoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
