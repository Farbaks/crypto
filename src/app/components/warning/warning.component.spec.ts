import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningComponent } from './warning.component';

describe('WarningComponent', () => {
  let component: WarningComponent;
  let fixture: ComponentFixture<WarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
