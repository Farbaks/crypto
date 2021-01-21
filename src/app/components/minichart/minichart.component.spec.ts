import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinichartComponent } from './minichart.component';

describe('MinichartComponent', () => {
  let component: MinichartComponent;
  let fixture: ComponentFixture<MinichartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinichartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
