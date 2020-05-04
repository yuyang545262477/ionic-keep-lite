import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcIconComponent } from './etc-icon.component';

describe('EtcIconComponent', () => {
  let component: EtcIconComponent;
  let fixture: ComponentFixture<EtcIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtcIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtcIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
