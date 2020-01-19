import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsTypeComponent } from './lists-type.component';

describe('ListTypeComponent', () => {
  let component: ListsTypeComponent;
  let fixture: ComponentFixture<ListsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
