import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividerLineComponent } from './divider-line.component';

describe('DividerLineComponent', () => {
  let component: DividerLineComponent;
  let fixture: ComponentFixture<DividerLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerLineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
