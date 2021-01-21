import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeDetailPage } from './trade-detail.page';

describe('TradeDetailPage', () => {
  let component: TradeDetailPage;
  let fixture: ComponentFixture<TradeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
