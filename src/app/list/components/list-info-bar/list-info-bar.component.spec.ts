import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfoBarComponent } from './list-info-bar.component';

describe('ListInfoBarComponent', () => {
  let component: ListInfoBarComponent;
  let fixture: ComponentFixture<ListInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
