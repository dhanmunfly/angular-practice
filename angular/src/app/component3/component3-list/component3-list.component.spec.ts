import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3ListComponent } from './component3-list.component';

describe('Component3ListComponent', () => {
  let component: Component3ListComponent;
  let fixture: ComponentFixture<Component3ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
