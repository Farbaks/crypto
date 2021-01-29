import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPaymentMethodsPage } from './all-payment-methods.page';

describe('AllPaymentMethodsPage', () => {
  let component: AllPaymentMethodsPage;
  let fixture: ComponentFixture<AllPaymentMethodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPaymentMethodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPaymentMethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
