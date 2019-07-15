import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviousworkComponent} from './previouswork.component';

describe('PreviousworkComponent', () => {
  let component: PreviousworkComponent;
  let fixture: ComponentFixture<PreviousworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
