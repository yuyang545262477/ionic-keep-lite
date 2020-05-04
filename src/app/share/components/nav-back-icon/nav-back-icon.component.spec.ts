import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBackIconComponent } from './nav-back-icon.component';

describe('NavBackIconComponent', () => {
  let component: NavBackIconComponent;
  let fixture: ComponentFixture<NavBackIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBackIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
