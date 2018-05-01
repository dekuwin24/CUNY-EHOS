import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamableSComponent } from './flamable-s.component';

describe('FlamableSComponent', () => {
  let component: FlamableSComponent;
  let fixture: ComponentFixture<FlamableSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamableSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamableSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
