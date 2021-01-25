import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinOverviewPage } from './coin-overview.page';

describe('CoinOverviewPage', () => {
  let component: CoinOverviewPage;
  let fixture: ComponentFixture<CoinOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
