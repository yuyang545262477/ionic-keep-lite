import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuBarComponent } from './list-menu-bar.component';

describe('ListMenuBarComponent', () => {
  let component: ListMenuBarComponent;
  let fixture: ComponentFixture<ListMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
