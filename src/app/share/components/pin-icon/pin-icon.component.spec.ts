import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinIconComponent } from './pin-icon.component';

describe('PinIconComponent', () => {
  let component: PinIconComponent;
  let fixture: ComponentFixture<PinIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
